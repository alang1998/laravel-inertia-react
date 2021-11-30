import React from 'react'
import App from  '../../Layouts/App'
import Pagination from '../../Components/Pagination'
import Dialog from '../../Components/Dialog'
import useDialog from '../../Hooks/useDialog'
import { Inertia } from '@inertiajs/inertia'
import { useForm } from '@inertiajs/inertia-react'
import UserForm from './UserForm'

export default function Index(props) {

    const { data: users, links, from } = props.users

    const { modal: addDialogTrigger, open: addDialogHandler, close: addDialogClose } = useDialog()
    const { modal: editDialogTrigger, open: editDialogHandler, close: editDialogClose } = useDialog()
    const { modal: destroyDialogTrigger, open: destroyDialogHandler, close: destroyDialogClose } = useDialog()

    const { data, setData, post, put, reset, errors } = useForm({
        name: '',
        email: '',
        username: '',
        location: '',
        password: '',
    })
    
    const changeHandler = (e) => {
        setData({...data, [e.target.id]: e.target.value})
    }

    const editHandler = (user) => {
        setData(user)
        editDialogHandler()
    }

    const deleteHandler = (user) => {
        setData(user)
        destroyDialogHandler()
    }

    const destroyHandler = () => {
        Inertia.delete(route('users.destroy', data.id), {
            onSuccess: () => { destroyDialogClose() }
        })
    }

    const storeHandler = (e) => {
        e.preventDefault();
        post(route('users.store'), { 
            data, 
            onSuccess: () => {
                reset(), addDialogClose()
            }
        })
    }

    const updateHandler = (e) => {
        e.preventDefault();
        put(route('users.update', data.id), { 
            data, 
            onSuccess: () => {
                reset(), editDialogClose()
            }
        })
    }

    return (
        <>
            <Dialog trigger={addDialogTrigger} title="Create New User">
                <UserForm 
                {...{
                    data, 
                    setData, 
                    submitLabel: 'Save', 
                    submit: storeHandler, 
                    errors, 
                    changeHandler: changeHandler
                    }
                }
                />
            </Dialog>

            <Dialog trigger={editDialogTrigger} title={`Edit User ${data.name}`}>
                <UserForm 
                {...{
                    data, 
                    setData, 
                    submitLabel: 'Update', 
                    submit: updateHandler, 
                    errors, 
                    changeHandler: changeHandler
                    }
                }/>
            </Dialog>

            <Dialog trigger={destroyDialogTrigger} title={`Delete User ${data.name}`}>
                <p>Are you sure?</p>
                <div className="d-flex flex-row-reverse">
                    <button className="btn btn-danger mx-2" onClick={destroyHandler}>Delete</button>
                    <button className="btn btn-secondary">Cancel</button>
                </div>
            </Dialog>
            
            <button onClick={addDialogHandler} className="btn btn-primary mb-1"> Add</button>
            <div className="card">
                <div className="card-header">
                    Users
                </div>
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Username</th>
                                <th>Email</th>
                                <th>Location</th>
                                <th className="text-end">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, index) => (
                                <tr key={index}>
                                    <td>{from + index}</td>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.location}</td>
                                    <td>
                                        <div className="dropdown text-end">
                                            <button className="btn p-0" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0z" fill="none"/>
                                                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                                                </svg>
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><button onClick={() => editHandler(user)} className="dropdown-item" href="#">Edit</button></li>
                                                <li><button onClick={() => deleteHandler(user)} className="dropdown-item" href="#">Delete</button></li>
                                            </ul>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Pagination links={links}/>
                </div>
            </div>
        </>
    )
}

Index.layout = (page) => <App {...{ children: page, title: "Users" } }/>
