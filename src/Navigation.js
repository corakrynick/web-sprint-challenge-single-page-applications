import React from 'react'
import { useHistory } from "react-router-dom"

function Navigation() {
    const history = useHistory()
    return(
        <div>
            <h1>Lambda Eats</h1>
            <h2>A website designed to bring food to hungry coders</h2>
            <button onClick={() => history.push("/")}>Home</button>
        </div>
    )
}

export default Navigation;