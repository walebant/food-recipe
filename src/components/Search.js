import React from 'react'
import {GoSearch, GoSettings} from 'react-icons/go'



export default function Search() {
    return (
        <div className="search-container">
           <GoSearch className="icon-search" />
           <input className="input" type="text" placeholder="Search food" />
           <GoSettings className='icon-settings' />
        </div>
    )
}