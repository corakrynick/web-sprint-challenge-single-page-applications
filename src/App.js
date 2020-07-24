import React, {useState, useEffect} from "react";
import {Switch, Route, useHistory} from 'react-router-dom';
import Axios from "axios";
import * as yup from 'yup';
import Navigation from './Navigation';
import Home from './Home';
import Form from './Form';
import Completion from './Completion';


const initialForm = {
  name: "",
  size: "",
  cheese: false,
  pepperoni: false,
  sausage: false,
  pineapple: false,
  special: "",
}

const formSchema = yup.object().shape({
  name: yup.string().required('Name is Required'),
  size: yup.string(),
  cheese: yup.string(),
  pepperoni: yup.string(),
  sausage: yup.string(),
  pineapple: yup.string(),
  special: yup.string(),
})

const App = () => {
  const [form, setForm] = useState(initialForm)
  const [pizza, setPizza] = useState([])
  const [disable, setDisable] = useState(true)
  const [errors, setErrors] = useState(initialForm)
  const history = useHistory()

  useEffect(() => {
    formSchema.isValid(form)
    .then(valid => setDisable(!valid))
  }, [form])

  const validateForm = (e) => {
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then(() => setErrors({...errors, [e.target.name]: ''}))
      .catch((err) => setErrors({...errors, [e.target.name]: err.errors}))
  }

  const handleChange = (e) => {
    e.persist()
    e.target.type === 'checkbox' ?
    setForm({...form, [e.target.name]: e.target.checked}):
    setForm({...form, [e.target.name]: e.target.value});
    validateForm(e)
  }
 
  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('https://reqres.in/api/users', form)
    .then(res => {
      setPizza([res.data, ...pizza])
      setForm(initialForm)
      history.push("/complete");
    })
    .catch(err => {
      console.log(err)
    })
  }
  return (
    <div>
      <Navigation />
      {errors.name.length > 0 && <p>{errors.name}</p>}
      <Switch>
        <Route path="/form">
          <Form form={form}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          disable={disable}
          />
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
