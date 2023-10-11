import React, { useEffect } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/main.css'
import './assets/css/responsive.css'
import axios from 'axios'
import Routes from './router/Routes'
axios.defaults.baseURL = 'https://dubstudio.com.br/loja/wp-json/wp/v2'
const hideLoader = () => {
  const loader = document.getElementById('loader')
  loader.classList.add('hideLoader')
  setTimeout(() => loader.remove(), 2000)
}
function App() {
  useEffect(hideLoader, [])
  return (
    <>
      <Routes />
    </>
  )
}
export default App
