import React from 'react'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/UserSlice'

export const UserComponent = () => {

    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={
            () => dispatch(setUser({
                name:"jahanvi",
                age:20
            }))
        }>
            Set User
        </button>
    </div>
  )
}
