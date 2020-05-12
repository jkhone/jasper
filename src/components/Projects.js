import React from 'react'
import Mint from '../assets/mint.png'
import Memory from '../assets/memory.png'
import Game from '../assets/csharpgame.png'

export default props => {
    return (
        <div className='mainareas projectareas'>
            <div className='singleproject'>
                <h1>Mint Shoes</h1>
                <div className='projectinfo'>
                    <div>
                        <img src={Mint} alt='memory'/>
                    </div>
                    <div className='projecttext'>
                        <p>
                            My first full on collaborative project. My group created an e-commerce website with the 
                            premise of being able to purchase the latest shoes worn by NBA players. 
                        </p>
                        <a className='buttonlink' href='https://github.com/jkhone/sports-site-dude' target='_blank' rel="noopener noreferrer">
                            <button>GitHub Repo</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='singleproject'>
                <h1>Memory Card Game</h1>
                <div className='projectinfo'>
                    <div>
                        <img src={Memory} alt='memory'/>
                    </div>
                    <div className='projecttext'>
                        <p>
                            This is a simple memory game made using only HTML, CSS, and JavaScript.
                            Match the cards with the given lives to win. You can play a live demo&nbsp; 
                            <a href='http://memory-game-jasper.surge.sh/' target='_blank' rel="noopener noreferrer">here</a>.
                        </p>
                        <a className='buttonlink' href='https://github.com/jkhone/Memory' target='_blank' rel="noopener noreferrer">
                            <button>GitHub Repo</button>
                        </a>
                    </div>
                </div>
            </div>

            <div className='singleproject'>
                <h1>C# Game</h1>
                <div className='projectinfo'>
                    <div>
                        <img src={Game} alt='game'/>
                    </div>
                    <div className='projecttext'>
                        <p>
                            A simple game of paper, rock, scissors that is playable in the console. I was interested in using C# because I'm fond of games and this was a step into that realm.
                        </p>
                        <a className='buttonlink' href='https://github.com/jkhone/csharp-game' target='_blank' rel="noopener noreferrer">
                            <button>GitHub Repo</button>
                        </a>
                    </div>
                </div>


            </div>   
        </div>
    )
}