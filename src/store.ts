import { AnyAction, applyMiddleware, compose, createStore, Store } from 'redux'
import rootReducer from './reducers'
import ReduxThunk, { ThunkMiddleware } from 'redux-thunk'
import { ApiService, ExceptionService } from './services'

const store: Store = createStore(
  rootReducer,
  undefined,
  compose(
    applyMiddleware(
      ReduxThunk.withExtraArgument({
        ApiService,
        ExceptionService,
      }) as ThunkMiddleware<IAppState, AnyAction>
    )
  )
)

export default store
