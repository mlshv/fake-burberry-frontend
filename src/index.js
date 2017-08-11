import React from 'react'
import ReactDOM from 'react-dom'
import { IntlProvider } from 'react-intl'
import { addLocaleData } from 'react-intl'
import ruLocaleData from 'react-intl/locale-data/ru'
import 'normalize.css'
import 'flexboxgrid2'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

addLocaleData(ruLocaleData)

ReactDOM.render(
  <IntlProvider locale="ru">
    <App />
  </IntlProvider>,
  document.getElementById('root')
)
registerServiceWorker()
