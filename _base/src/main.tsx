import '@builder.io/qwik/qwikloader.js'

import { render } from '@builder.io/qwik'
import './index.css'
import { initTheme } from './theme.ts'
import { App } from './app.tsx'

initTheme()

render(document.getElementById('app')!, <App />)
