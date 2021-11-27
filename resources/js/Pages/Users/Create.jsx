import { useForm } from '@inertiajs/inertia-react'
import React from 'react'
import UserForm from './UserForm'

export default function Create({ close }) { 
    const { data, setData, post, reset, errors } = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    })
    
    const submitHandler = (e) => {
        e.preventDefault();
        post(route('users.store'), { 
            data, 
            onSuccess: () => {
                reset(), close()
            }
        })
    }
    return (        
        <div className="row mb-3">
            <div className="col-md-12">
                <form onSubmit={submitHandler}>
                    <UserForm { ...{ data, setData, button: 'Save', errors } } />
                </form>
            </div>
        </div>
    )
}
