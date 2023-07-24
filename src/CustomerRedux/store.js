import {configureStore} from '@reduxjs/toolkit'
import {updateCurrentLoginStatus, updateCustomerData} from './reducer'
import logger from 'redux-logger'


export const store = configureStore({
    reducer:
    {
        updateCurrentLoginStatus,
        updateCustomerData
    },
    middleware : [logger]
})