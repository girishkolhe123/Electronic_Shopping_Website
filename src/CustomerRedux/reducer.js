import { init } from "./init"

export const updateCurrentLoginStatus = (currData = init, newData)=>
{
    currData = 
    {
        ...currData,
        isCurrentLogin: newData.isCurrentLogin
    }
    return currData
}

export const updateCustomerData = (currData = init, newData)=>
{
    currData = 
    {
        ...currData,
        customerData: newData.customerData
    }

    return currData
}