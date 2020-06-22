import React, {useState} from 'react'
import SendMessage from '../components/SendMessage'

export default function Chat() {
    
    return (
        <div>
        <div className="chat-container">
            <p className="left">Hello</p>
            <p className="right">Hi there!</p>
        </div>

        <SendMessage />
        </div>
    )
}
