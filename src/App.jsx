
import './App.css'


import Navbar from "./components/navbar/Navbar.jsx"
import Product from "./components/product/Product.jsx"

import ContextProvider from './Context.jsx'

function App() {

  return (
    <>
    <ContextProvider >
      <Navbar />
      <Product />
    </ContextProvider>
    </>
  )
}

export default App
