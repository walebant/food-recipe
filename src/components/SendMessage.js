import React, {useState} from 'react'

export default function SendMessage() {
    const [state, setState] = useState("")

    const handleChange = e => setState(e.target.value)
    const handleSend = e => {}
    return (
        <div>

        <form>
            <input onChange={handleChange} type="text" placeholder="Type message" />
            <button onClick={handleSend} type="submit">Send</button>
        </form>
            
        </div>
    )
}
