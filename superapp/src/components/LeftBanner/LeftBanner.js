import React from 'react'
import  './LeftBanner.css'



function banner(){
    return(
        <>
        <div className='left'>
            <div className='account'>
                Already have an account ?
            </div>
            <button className='login'>LOGIN</button>
            <div className='information'>Discover new things on SuperApp</div>
        </div>
        </>
    )
}
export default banner