import React from 'react'

function Completion(props) {
    const { pizza } = props
    return(
        <div>
            <h2>Thanks for Your Order!</h2>
            {pizza.map((myPizza) => {
                return (
                    <div>
                        <h4>{myPizza.name}</h4>
                        <p>Size: {myPizza.size} </p>
                        {myPizza.cheese && <p>Extra Cheese</p>}
                        {myPizza.pepperoni && <p>Pepperoni</p>}
                        {myPizza.sausage && <p>Sausage</p>}
                        {myPizza.pineapple && <p>Pineapple</p>}
                        <p>Special Instructions: {myPizza.special}</p>
                    </div>
                )
            })}
        </div>    
    )
}

export default Completion