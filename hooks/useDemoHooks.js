import { useEffect, useState } from 'react'

export const useDemoHooks = () => {

    const [values, setValue] = useState('')
    let onCallBack = () => { }

    const getData = (callback) => {
        onCallBack = callback
    }

    const sendData = (value) => {
        console.log(value);
        onCallBack(value)
    }

    return {
        getData,
        sendData
    }
}