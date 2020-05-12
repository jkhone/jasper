import React from 'react'
import MyForm from './MyForm'

export default props => {
    return (
        <div className='mainareas'>
            <div className='formpage'>
                <p>
                    Feel free to contact me at my e-mail or on LinkedIn. I also provided 
                    a form to contact me directly from here if you'd like.
                </p>
                <p>
                    E-Mail: jasperkhonesavanh@gmail.com
                    <br/>
                    <a href='https://www.linkedin.com/in/jasper-khonesavanh-812006195/' target='_blank' rel="noopener noreferrer" >
                    LinkedIn
                    </a>
                </p>
                <h3>Direct Message Form</h3>
                <MyForm />
            </div>
        </div>
    )
}