import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import initEventListener from './services/events'
import store from './store'
import './index.css'

import reportWebVitals from './reportWebVitals'
import ErrorBoundary from './containers/ErrorBoundary'

initEventListener()

render(
  <Provider store={store}>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
    <div className="copyright">&copy; Maria Lobareva, 2021</div>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
