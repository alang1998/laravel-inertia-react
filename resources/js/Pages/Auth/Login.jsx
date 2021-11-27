import React, { useState } from 'react'
import Guest from '../../Layouts/Guest'
import { Link } from '@inertiajs/inertia-react'
import { Inertia } from '@inertiajs/inertia'

export default function Login({ errors }) {
  const [values, setValues] = useState({
    email: '', password: '', remember: false
  })

  const changeHandler = (e) => {
    setValues({
      ...values, [e.target.id]: e.target.value
    })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    Inertia.post('/login', values)
  }

  return (
    <>      
      <div className="card">
        <div className="card-header">
          Login
        </div>
        <div className="card-body">
          <form onSubmit={submitHandler} noValidate>
            <div className="mb-2">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" value={values.email} onChange={changeHandler} name="email" id="email" className="form-control" />
              {errors && (<div className="text-danger mt-1">{errors.email}</div>)}
            </div>
            <div className="mb-2">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" value={values.password} onChange={changeHandler} name="password" id="password" className="form-control" />
              {errors && (<div className="text-danger mt-1">{errors.password}</div>)}
            </div>
            <div className="form-check">
              <input type="checkbox" value={values.remember} onChange={(e) => setValues({...values, remember: e.target.checked })} name="remember" id="remember" className="form-check-input"/>
              <label htmlFor="remember">Rembember Me</label>
            </div>
            <button type="submit" className="btn btn-primary mt-2">Login</button>
          </form>
        </div>
        <div className="card-footer">          
          <div className="d-block">
            <span className="fs-6 text-muted m-0">
              Don't have an account ? {' '}
              <Link className="link-dark" href={route('register')}>Register</Link>
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

Login.layout = (page) => <Guest children={page} title="Login" />
