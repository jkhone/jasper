import React from 'react'

export default props => {
    return (
        <div className='mainareas skillsarea'>
            <h1>SKILLS</h1>
            <p>I've compiled a list of skills I have. This list is also always growing as I learn more everyday.</p>
            <p>This website itself was made using React.js.</p>
            <div className='skills' >
                <ul>
                    <li>React.js</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>MySQL</li>
                </ul>
                <ul>
                    <li>Express.js</li>
                    <li>Node.js</li>
                    <li>Firebase</li>
                    <li>Git</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <p className='jobs'>
                I've also previously been employed at places such as US Bank
                and MGM properties. I believe that these places have provided 
                me with tools that are helpful in any work environment such as
                communication, customer service, professionalism, teamwork and 
                countless more. 
            </p>
        </div>
    )
}