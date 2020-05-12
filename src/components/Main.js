import React from 'react'
import Icon from '../Icon'
import Logo from '../assets/JKHON-No-Lines.png'

export default props => {
    return (
        <div className='mainpage mainareas'>
            <img src={Logo} alt='logo' className='logo' />
            <p className='myposition'>
                Front-End Developer
            </p>
            <div className='mylinks' >
                <a href='https://github.com/jkhone' target='_blank' rel="noopener noreferrer" >
                    <Icon icon='github' />
                </a>
                <a href='https://www.linkedin.com/in/jasper-khonesavanh-812006195/' target='_blank' rel="noopener noreferrer" >
                    <Icon icon='linkedin' />
                </a>
            </div>
        </div>
    )
}