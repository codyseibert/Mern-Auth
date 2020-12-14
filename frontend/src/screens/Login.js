import React, { useState } from 'react'
import axios from 'axios'
import {Form, Button, Alert} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Login = () => {

    // STATES
    const [email, setEmail] = useState('bensony63@gmail.com')
    const[password, setPassword] = useState('boy')
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState('')


    //FUNCTION CALLED ON FORM SUBMIT
    const HandleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = {email, password};

            const apiReq = await axios.post('/api/auth/user/login', data)
            console.log(apiReq);
        } catch (error) {
            setIsError(true)
            setError(error.response.data.message)
        }
    }

    // RETURN JSX
    return (
        <div className="jumbotron mt-5">
            {isError && <Alert variant='danger' onClose={() => setIsError(false)} dismissible="true">{error}</Alert> }
            <Form onSubmit={HandleFormSubmit}>
                <h4>ENTER YOUR DETAILS</h4>
                <Form.Group>
                    <Form.Label>Email Address :</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password :</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                </Form.Group>

                <Button type="submit" variant="outline-info">Login!</Button>
                 <br/> <br/>
                <small>New User ? <NavLink to="/register"> Register Now</NavLink></small>
            </Form>
        </div>
    )
}

export default Login
