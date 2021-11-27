import React from 'react'
import App from '../Layouts/App'

export default function Dashboard() {
  return (
    <>
      <div className="card">
        <div className="card-header">
          Dashboard
        </div>
        <div className="card-body">
          This is dashboard page.
        </div>
      </div>
    </>
  )
}

Dashboard.layout = (page) => <App {...{ children: page, title: "Dashboard" }} />

