import React, { useState } from 'react';
import './RegisterForm.css'


function Form() {

    const [name, setName] = useState('')
    const [user, setUser] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState(false)
    const [checked, setChecked] = useState(false)

    const handleMessage = (e) => {
        e.preventDefault()
        if (name.length === 0 || user.length === 0 || email.length == 0 || number.length == 0) {
            setError(true)
        }
        else {
            setError(false)
            if ( checked === true) {
                alert("You have registered successfully now you can enjoy the superapp");
            }
        }        
    }
    const handleChecked = () => {
        setChecked(!checked)
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
                <div className='check'>
                    <input type="checkbox" className='box' value={checked} onChange={handleChecked} />
                    <span className='message'>Share my registration data with super app</span>
                </div>
                <button type="submit" className='btn'>SIGN-UP</button>
            </form>
            <p id='first'>By clicking on Sign up. you agree to Superapp <span>Terms and <br></br>Conditions of Use</span></p>
            <p id='second'>To learn more about how Superapp collects, uses, shares and<br></br> protects your personal data please head Superapp <span>Privacy <br></br>Policy</span></p>
        </>
    )
}


export default Form