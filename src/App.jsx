import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Provider } from 'react-redux'
import { AddCustomer } from './AddCustomer'
import { ViewCustomer } from './ViewCustomer'
import { Store } from './Store'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Provider store={Store} basename="/ViteReact17march2025/">
      <AddCustomer/>
      <ViewCustomer/>
      </Provider>
    </>
  )
}

export default App
