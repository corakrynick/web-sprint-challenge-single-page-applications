import React, {useState} from "react";
import {Switch, Route} from 'react-router-dom'
import Navigation from './Navigation'
import Home from './Home'
import Form from './Form'
import Completion from './Completion'
import Axios from "axios";

const initialForm = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  sausage: false,
  pineapple: false,
  special: "",
}

const App = () => {
  const [form, setForm] = useState(initialForm)
  const [pizza, setPizza] = useState([])

  const handleChange = (e) => {
    e.target.type === 'checkbox' ?
    setForm({...form, [e.target.name]: e.target.checked}):
    setForm({...form, [e.target.name]: e.target.value});
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('https://reqres.in/', form)
    .then(res => {
      setPizza([res.data, ...pizza])
    })
    .catch(err => {
      console.log(err.dir)
    })
  }
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/form">
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </Route>
        <Route path="/complete">
          <Completion pizza={pizza}/>
        </Route>
        <Route path="/">
            <Home/>
          </Route>
      </Switch>
    </div>
  );
};
export default App;
