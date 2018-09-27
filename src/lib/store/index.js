import { connect, createProvider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { persistStore, persistCombineReducers } from 'redux-persist'
import { reducers } from '../reducers'
import storage from 'redux-persist/lib/storage'

const config = {
  storage,
  key: 'cozy-bar',
  whitelist: ['locale']
}

const STORE_KEY = 'cozybar-store'

const reducer = persistCombineReducers(config, { ...reducers })

export const createReduxStore = () => {
  let store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
  )
  persistStore(store)

  return store
}

export const ReduxProvider = createProvider(STORE_KEY)

export const connectCustomStore = (mapStateToProps, mapDispatchToProps, mergeProps, options = {}) => {
  options.storeKey = STORE_KEY

  return connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
    options
  )
}
