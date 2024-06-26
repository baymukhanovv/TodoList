import React from 'react'
import cl from './Input.module.css'

const Input = (props) => {
    return (
        <input {...props} className={cl.formInput} />
    )
}

export default Input