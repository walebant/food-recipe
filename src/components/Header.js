import React from 'react'

export default function Header({name}) {
    return (
        <header>
           <span className="hello">Hello</span> <strong className="name">{name}</strong> 
        </header>
    )
}