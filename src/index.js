import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'


ReactDOM.render(< App />, document.getElementById('container'))


const API = "https://api.giphy.com/v1/gifs/search?q=YOUR QUERY HERE&api_key=dc6zaTOxFJmzC&rating=g";