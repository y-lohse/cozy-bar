/* global __PIWIK_TRACKER_URL__  __PIWIK_SITEID__ __PIWIK_DIMENSION_ID_APP__ */

import React, { Component } from 'react'
import { connect } from 'react-redux'

import { translate } from 'cozy-ui/react/I18n'
import Icon from 'cozy-ui/react/Icon'
import {
  shouldEnableTracking,
  getTracker,
  configureTracker
} from 'cozy-ui/react/helpers/tracker'
import { isMobileApp } from 'cozy-device-helper'

import Banner from 'components/Banner'
import Drawer from 'components/Drawer'
import Settings from 'components/Settings'
import Apps from 'components/Apps'
import SearchBar from 'components/SearchBar'
import Claudy from 'components/Claudy'
import SupportModal from 'components/SupportModal'
import {
  getTheme,
  hasFetched,
  getContent,
  isCurrentApp,
  fetchApps,
  fetchContext,
  fetchSettingsData,
  shouldEnableClaudy
} from 'lib/reducers'

import appsIcon from 'assets/sprites/icon-apps.svg'

export class Bar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      claudyFired: false, // true to fire claudy (used by the drawer)
      claudyOpened: false,
      drawerVisible: false,
      usageTracker: null,
      supportDisplayed: false,
      searchBarEnabled: props.isDrive && !props.isPublic && !isMobileApp()
    }
    this.fetchContent = this.fetchContent.bind(this)
    this.fetchInitialData = this.fetchInitialData.bind(this)
  }

  componentDidMount() {
    if (shouldEnableTracking()) {
      this.initPiwikTracker()
    }
    this.fetchInitialData()
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.props.hasFetchedApps &&
      this.state.drawerVisible &&
      prevState.drawerVisible !== this.state.drawerVisible
    ) {
      this.fetchContent()
    }
  }

  initPiwikTracker() {
    const trackerInstance = getTracker(
      __PIWIK_TRACKER_URL__,
      __PIWIK_SITEID__,
      false,
      false
    )
    configureTracker({
      appDimensionId: __PIWIK_DIMENSION_ID_APP__,
      app: 'Cozy Bar',
      heartbeat: 0
    })
    this.setState({ usageTracker: trackerInstance })
  }

  fetchContent() {
    this.props.fetchApps()
  }

  fetchInitialData() {
    if (this.props.isPublic) {
      return
    }
    this.props.fetchContext()
    this.props.fetchSettingsData(false)
    this.fetchContent()
  }

  toggleDrawer = () => {
    // don't allow to toggle the drawer if claudy opened or is opening
    if (this.state.claudyOpened || this.state.claudyFired) return
    const drawerVisible = !this.state.drawerVisible
    // don't wait for transitionend if displaying
    if (drawerVisible) this.props.onDrawer(drawerVisible)
    this.setState({ drawerVisible })
  }

  toggleClaudy = (isFromDrawer = false) => {
    if (!this.props.claudyEnabled) return
    const { usageTracker, claudyOpened } = this.state
    if (isFromDrawer && !claudyOpened) {
      // if opened from drawer
      // reset to toggle via the Claudy component
      return this.setState({ claudyFired: true })
    }
    if (this.state.claudyFired) this.setState({ claudyFired: false })
    if (usageTracker) {
      usageTracker.push([
        'trackEvent',
        'Claudy',
        claudyOpened ? 'close' : 'open',
        'claudy'
      ])
    }
    this.setState({ claudyOpened: !claudyOpened })
  }

  toggleSupport = () => {
    const { supportDisplayed } = this.state
    this.setState({ supportDisplayed: !supportDisplayed })
  }

  renderCenter() {
    const {
      appName,
      appNamePrefix,
      appSlug,
      iconPath,
      replaceTitleOnMobile,
      isPublic
    } = this.props
    return (
      <Apps
        appName={appName}
        appNamePrefix={appNamePrefix}
        appSlug={appSlug}
        iconPath={iconPath}
        replaceTitleOnMobile={replaceTitleOnMobile}
        isPublic={isPublic}
      />
    )
  }

  renderLeft = () => {
    const { t, isPublic } = this.props
    // data-tutorial attribute allows to be targeted in an application tutorial
    return !isPublic ? (
      <button
        type="button"
        className="coz-bar-btn coz-bar-burger"
        onClick={this.toggleDrawer}
        data-tutorial="apps-mobile"
      >
        <Icon icon={appsIcon} width={16} height={16} />
        <span className="coz-bar-hidden">{t('drawer')}</span>
      </button>
    ) : null
  }

  renderRight = () => {
    const { isPublic } = this.props
    return !isPublic ? (
      <Settings
        toggleSupport={this.toggleSupport}
        onLogOut={this.props.onLogOut}
      />
    ) : null
  }

  render() {
    const {
      claudyFired,
      claudyOpened,
      drawerVisible,
      searchBarEnabled,
      supportDisplayed,
      usageTracker
    } = this.state
    const {
      theme,
      themeOverrides,
      barLeft,
      barRight,
      barCenter,
      claudyEnabled,
      onDrawer,
      isPublic,
      onLogOut,
      userActionRequired
    } = this.props

    const {
      primaryColor: pColor,
      primaryContrastTextColor: pctColor
    } = themeOverrides
    const pStyle = pColor ? { '--cozBarThemePrimaryColor': pColor } : {}
    const pctStyle = pctColor
      ? { '--cozBarThemePrimaryContrastTextColor': pctColor }
      : {}
    const themeStyle = { ...pStyle, ...pctStyle }

    return (
      <div className={`coz-bar-wrapper coz-theme-${theme}`} style={themeStyle}>
        <div id="cozy-bar-modal-dom-place" />
        <div className="coz-bar-container">
          {barLeft || this.renderLeft()}
          {barCenter || this.renderCenter()}
          <div className="u-flex-grow">
            {searchBarEnabled ? <SearchBar /> : null}
          </div>
          {barRight || this.renderRight()}
          {!isPublic ? (
            <Drawer
              visible={drawerVisible}
              onClose={this.toggleDrawer}
              onClaudy={
                (claudyEnabled && (() => this.toggleClaudy(true))) || false
              }
              isClaudyLoading={claudyFired}
              drawerListener={() => onDrawer(drawerVisible)}
              toggleSupport={this.toggleSupport}
              onLogOut={onLogOut}
            />
          ) : null}
          {claudyEnabled && (
            <Claudy
              usageTracker={usageTracker}
              claudyFired={claudyFired}
              onToggle={() => this.toggleClaudy(false)}
              opened={claudyOpened}
            />
          )}
          {supportDisplayed && <SupportModal onClose={this.toggleSupport} />}
        </div>
        {userActionRequired && <Banner {...userActionRequired} />}
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  theme: getTheme(state).name,
  themeOverrides: getTheme(state).overrides,
  barLeft: getContent(state, 'left'),
  barRight: getContent(state, 'right'),
  barCenter: getContent(state, 'center'),
  isDrive: isCurrentApp(state, { slug: 'drive' }),
  claudyEnabled: shouldEnableClaudy(state),
  hasFetchedApps: hasFetched(state)
})

export const mapDispatchToProps = dispatch => ({
  fetchApps: () => dispatch(fetchApps()),
  fetchContext: () => dispatch(fetchContext()),
  fetchSettingsData: displayBusy => dispatch(fetchSettingsData(displayBusy))
})

export default translate()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Bar)
)
