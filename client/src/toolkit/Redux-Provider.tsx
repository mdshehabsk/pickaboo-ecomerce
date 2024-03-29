'use client'
import React from 'react'
import { Provider } from 'react-redux'
import store from './store'

const ReduxProvider = ({children}:{children:React.ReactElement}) => {
  return (
    <Provider store={store} >
        {children}
    </Provider>
  )
}

export default ReduxProvider