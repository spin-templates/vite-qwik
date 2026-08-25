import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import './index.css'
import { initTheme } from './theme.js'
import { App } from './app.jsx'

initTheme()

render(document.getElementById('app'), <App />)
