import React from 'react'
import { useSelector } from 'react-redux'

export const SearchComponent = () => {

    const user = useSelector( (state) => state.user.value)
  return (
    <div>

        <h1>{user.name}</h1>
        <h1>{user.age}</h1>

    </div>
  )
}
