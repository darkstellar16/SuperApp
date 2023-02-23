import React, { useState } from 'react';
import './RegisterForm.css'


function Form() {

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState(false)

    const handleMessage = (e) => {
        e.preventDefault()

        if (name.length == 0 || user.length == 0 || email.length == 0 || number.length == 0) {
            setError(true)
        }
        else{
            alert("User Registered");
        }

    }


    return (
        <>
            <div className='appContainer'>Super app</div>
            <div className='create'>Create your new account</div>
            <div className='email'>Email</div>
            <div className='line'></div>
            <div className='google'>Google</div>

            <form onSubmit={handleMessage}>
                <div className='oneC'>
                    <input type="text" className='nameField' placeholder="Name" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {error && name.length <= 0 ?
                        <span className='errorF1'>This Field is required</span> : ""}

                    <input type="text" className='userField' placeholder="UserName" value={user}
                        onChange={(e) => setUser(e.target.value)}
                    />
                    {error && user.length <= 0 ?
                        <span className='errorF2'>This Field is required</span> : ""}

                    <input type="email" className='emailField' placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {error && email.length <= 0 ? <span className='errorF3'>This Field is required</span> : ""}

                    <input type="number" className='numField' placeholder="Mobile" value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    {error && number.length <= 0 ?
                        <span className='errorF4'>This Field is required</span> : ""}
                </div>

                <button type="submit" className='btn'>SUBMIT</button>

            </form>
        </>
    )
}


export default Form