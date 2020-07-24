import React from 'react'
import {useHistory} from 'react-router-dom'

function Home() {
    const history = useHistory()
    return (
        <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6ut9tBacQ_2ywaCDEqR4zrYZxhpYEh7WrPw&usqp=CAU' alt="pizza slice"/>
            <button onClick={() => history.push('/form')}>Build Your Pizza</button>
        </div>
    )
}

export default Home;
