import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
// import { history } from '../../history'

import './register.scss'
import NavBar from '../NavBar'
import api from '../../service'

const Register = () => {
    const handleSubmit = values => {
        try{
           api.post('register', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    // eslint-disable-next-line no-restricted-globals
                    location.assign('/login')
                }
            }) 
        }catch(erro){
            console.log(erro)
        }
        
    }
    
    // eslint-disable-next-line no-restricted-globals
    const loginRedict = () => { location.assign('/login')}
    const validations = yup.object().shape({
        name: yup.string().required(),
        username: yup.string().email().required(),
        password: yup.string().min(6).required(),
    })
    
    return (
        <>
        <NavBar />
            <h1>Registrar
            </h1>
            <p>Preencha os campos para criar um novo usuário</p>
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                        
                        <Field
                            name="name"
                            className="Login-Field"
                        /><br />
                        <ErrorMessage
                            component="span"
                            name="name"
                            className="Login-Error"
                        />
                    </div>

                    <div className="Login-Group">
                        <Field
                            name="username"
                            className="Login-Field"
                        /><br />
                        <ErrorMessage
                            component="span"
                            name="username"
                            className="Login-Error"
                        />
                    </div>

                    <div className="Login-Group">
                        <Field
                            name="password"
                            className="Login-Field"
                        /><br />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>

                    <button className="Login-Btn" type="submit" style={{marginRight: '10px'}}>Register</button>
                    <button onClick={loginRedict} className="Login-Btn" type="submit">Fazer Login</button>
                </Form>
            </Formik>
        </>
    )
}

export default Register