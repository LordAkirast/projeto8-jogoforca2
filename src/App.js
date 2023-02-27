import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { useState } from 'react';
import Letters from './Letras';


const randomWords = [
    "abacaxi",
    "banana",
    "cenoura",
    "dinossauro",
    "elefante",
    "futebol",
    "girafa",
    "hipopótamo",
    "igreja",
    "jogador",
    "kiwi",
    "limão",
    "melancia",
    "nariz",
    "onça",
    "papagaio",
    "queijo",
    "raposa",
    "sorvete",
    "tigre",
    "uva",
    "vassoura",
    "xadrez",
    "yoga",
    "zebra"
];



function App(props) {
    const [choosenWord, setchoosenWord] = useState('')
    const [hangLevel, sethangLevel] = useState('./images/assets/forca0.png')
    const [reset, setreset] = useState(0)

    return (
        <div className='screen'>
            <div className='gameScreen'>
                <div className='container'>
                    <div className='hang'>
                        <img className='hang' src={hangLevel} alt="forca0" />
                    </div>
                    <div className='hangWords'>
                        <button onClick={getRandomWord}>Escolher Palavra</button>
                        <div className='rightWords'></div>
                    </div>
                </div>
            </div>
            <Letters choosenWord={choosenWord}/>
        </div>

    )

    function getRandomWord() {
        setreset(reset + 1);

        if (reset === 0) {
            sethangLevel('./images/assets/forca0.png');
            const randomIndex = Math.floor(Math.random() * randomWords.length);
            console.log(randomWords[randomIndex]);
            setchoosenWord(randomWords[randomIndex])
            return randomWords[randomIndex];
        } else {
            setreset(0)
            window.location.reload();
        }
    }

}









export default App;