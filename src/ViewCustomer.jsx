import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCustomer } from './Slices/CustomerSlice'

export const ViewCustomer = () => {
    // const {customer} = props
    const customer = useSelector(state => state.customers)
    const dispatch = useDispatch()

    const removeCustomer = (index) => {
      dispatch(deleteCustomer(index))
    }

  return (
    <div className='viewCustomer'>
        <h3>List of Customers</h3>
        <ul style={{listStyle:"none"}}>
            {customer.map((customer,index) => <li>{customer} <button onClick={() => removeCustomer(index)}>Delete</button></li>)}
        </ul>
    </div>
  )
}
