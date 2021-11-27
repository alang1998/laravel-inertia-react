import { useForm } from '@inertiajs/inertia-react'
import React, { useEffect } from 'react'
import UserForm from './UserForm'

export default function Edit({ close, model }) { 
    const { data, setData, put, reset, errors } = useForm({
        name: model.name,
        email: model.email,
        username: model.username,
        location: model.location,
        password: model.password,
    })

    const submitHandler = (e) => {
        e.preventDefault();
        put(route('users.update', model.id), { 
            data, 
            onSuccess: () => {
                reset(), close()
            }
        })
    }

    useEffect(() => {
        setData({
            ...data,  
            name: model.name,
            email: model.email,
            username: model.username,
            location: model.location,
            password: model.password,
        })
    }, [model])
    
    return (        
        <div className="row mb-3">
            <div className="col-md-12">
                <form onSubmit={submitHandler}>
                    <UserForm errors={errors} data={data} setData={setData} button={`Update`} />
                </form>
            </div>
        </div>
    )
}
