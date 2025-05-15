import React, { useEffect, useRef, useState } from 'react'
// import { ViewCustomer } from './ViewCustomer'
import { useDispatch } from 'react-redux'
import { addCustomer as addCustomerAction} from './Slices/CustomerSlice'

export const AddCustomer = () => {
    const [input,setInput] = useState("")
    // const [customer,setCustomer] = useState([])
    const inputFocus = useRef(null)
    const dispatch = useDispatch();

    useEffect(() => {
        inputFocus.current.focus()
    })

    const addCustomer = () => {
        console.log(input);
        if(input){
            dispatch(addCustomerAction(input))
            // setCustomer(preState => [...preState,input])
            setInput("")
        }
    }

  return (
    <div>
        <h3>Add Customers</h3>
        <input type="text" ref={inputFocus} value={input} onChange={e => setInput(e.target.value)}/>
        <button onClick={addCustomer}>Add</button>

        {/* <ViewCustomer customer={customer}/> */}
    </div>
  )
}
