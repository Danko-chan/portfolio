import React, {useState} from 'react'
import Portfolio from './Portfolio'

export default function ThemePicker() {
    
    const [Theme, setTheme] = useState("")
    
    const pickTheme =()=>{
        setTheme("port")
    }
    if(Theme==="port"){
        return(
            <Portfolio />
        )
    }

    return (

        <div>
            <button onClick={pickTheme}>port</button>
        </div>
    )
}
