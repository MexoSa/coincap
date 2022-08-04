import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'
import reducers from "./reducers"
import rootSaga from "./saga"

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

const store = configureStore()

sagaMiddleware.run(rootSaga)

export default store