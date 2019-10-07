import React from 'react'
import './Avatar.css'

let Avatar = ({image,firstName,lastName}) =>{
    return <>
        
        <div>
            <img src={image} alt={firstName}/>
            <h1>{firstName} {lastName.toUpperCase()} </h1>
        </div>
    </>
}

export default Avatar;