import React from 'react'

function Completion(props) {
    const { myPizza } = props
    return(
        <div>
            <h2>Thanks for Our Order!</h2>
            {pizza.map((myPizza) => {
                return (
                    <h4>{myPizza.name}</h4>
                    <p>Size: {myPizza.size} </p>
                )
            }}
        </div>    
    )
}

export default Completion