import React, { useState } from 'react'
import App from  '../../Layouts/App'
import Pagination from '../../Components/Pagination'
import Dialog from '../../Components/Dialog'
import useDialog from '../../Hooks/useDialog'
import Create from './Create'
import Edit from './Edit'

export default function Index(props) {

    const { data: users, links, from } = props.users
    const { modal: addDialogTrigger, open: addDialogHandler, close: addDialogClose } = useDialog()
    const { modal: editDialogTrigger, open: editDialogHandler, close: editDialogClose } = useDialog()
    const [state, setState] = useState([])

    const editHandler = (user) => {
        setState(user);
        editDialogHandler()
    }

    return (
        <>
            <Dialog trigger={addDialogTrigger} title="Create New User">
                <Create close={addDialogClose}/>
            </Dialog>

            <Dialog trigger={editDialogTrigger} title="Edit User">
                <Edit model={state} close={editDialogClose}/>
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
                                                <li><a className="dropdown-item" href="#">View</a></li>
                                                <button onClick={() => editHandler(user)} className="dropdown-item" href="#">Edit</button>
                                                <li><a className="dropdown-item" href="#">Delete</a></li>
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
