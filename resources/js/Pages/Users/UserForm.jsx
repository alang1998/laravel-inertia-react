import React from 'react'

export default function UserForm({data, setData, submitLabel, submit, errors, changeHandler}) {

    return (
        <form onSubmit={submit}>
            <div className="row">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" name="name" value={data.name} onChange={changeHandler} id="name" className="form-control" />
                        {errors && <span className="text-danger mt-1">{errors.name}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" name="email" value={data.email} onChange={changeHandler} id="email" className="form-control" />
                        {errors && <span className="text-danger mt-1">{errors.email}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">Username</label>
                        <input type="text" name="username" value={data.username} onChange={changeHandler} id="username" className="form-control" />
                        {errors && <span className="text-danger mt-1">{errors.username}</span>}
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" name="password" value={data.password} onChange={changeHandler} id="password" className="form-control" />
                        {errors && <span className="text-danger mt-1">{errors.password}</span>}
                    </div>
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="location" className="form-label">Location</label>
                <input type="text" name="location" value={data.location} onChange={changeHandler} id="location" className="form-control" />
                {errors && <span className="text-danger mt-1">{errors.location}</span>}
            </div>
            <button className="btn btn-primary">{submitLabel}</button>
        </form>
    )
}
