import React from 'react'

function Form(props) {
    const {name, size, cheese, pepperoni, sausage, pineapple, special, handleChange, handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Your Name:
                <input name='name' value={name} onChange={handleChange}/>
            </label>
            <label>
                Choose Your Size:
                <select value={size} name='size' onChange={handleChange}>
                    <option value='sm'>Personal</option>
                    <option value='med'>Medium</option>
                    <option value='lg'>Large</option>
                    <option value='xl'>Coding Party</option>
                </select>
            </label>
            <label>
                Extra Cheese
                <input name='cheese' type='checkbox' checked={cheese} onChange={handleChange}/>
            </label>
            <label>
                Pepperoni
                <input name='pepperoni' type='checkbox' checked={pepperoni} onChange={handleChange}/>
            </label>
            <label>
                Sausage
                <input name='sausage' type='checkbox' checked={sausage} onChange={handleChange}/>
            </label>
            <label>
                Pineapple
                <input name='pineapple' type='checkbox' checked={pineapple} onChange={handleChange}/>
            </label>
            <label>
                Special Insructions
                <input name='special' type='textbox' value={special} onChange={handleChange}/>
            </label>
            <button type='submit' >Place Order Now</button>
        </form>
    )
}

export default Form