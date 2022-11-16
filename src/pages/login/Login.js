import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as yup from 'yup'
import React from 'react';
import './login.scss'
import api from '../../service';
import NavBar from '../NavBar';

const Login = () =>{

    const handleSubmit = values => {
       try{
            api.post('login', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('token', JSON.stringify(data))
                    // eslint-disable-next-line no-restricted-globals
                    location.assign('/')
                }
            })
        }catch (erro){
            console.log(erro);    
        }
        
    }

    const validations = yup.object().shape({
        username: yup.string().email().required(),
        password: yup.string().min(6).required()
    })

    return(
        <>
        <NavBar />
        <h1>Login</h1>
        <p>Preencha os campos para continuar</p>
        <Formik
            initialValues={{}}
            onSubmit={handleSubmit}
            validationSchema={validations}
        >
            <Form className="Login">
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
                <button className="Login-Btn" type="submit">Login</button>
            </Form>
        </Formik>
    </>
    )
}

export default Login;