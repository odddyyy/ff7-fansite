import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Main() {

    const history = useHistory()

    //functions
    const goTo = path => {
        history.push(path)
    }

    return (
        <div className="main-container">
            <div className="container">
                <div className="box">
                    <h1>Final Fantasy VII Fan Page</h1>
                    <button className="btn btn-outline-light mt-2" onClick={() => goTo('/home')}>Enter Site</button>
                </div>
            </div>
        </div>
    )
}
