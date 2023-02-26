import React, { createFactory } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import './index.css';
import styled from 'styled-components';

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const Letters = (props) => {
  const [hoveredLetter, setHoveredLetter] = useState('');
  const [selectedLetters, setSelectedLetters] = useState([]);
  const choosenWord = props.choosenWord


  const [rightLetters, setrightLetters] = useState([])

  const handleMouseOver = (letter) => {
    setHoveredLetter(letter);
  }

  const handleMouseOut = () => {
    setHoveredLetter('');
  }

  const handleLetterClick = (letter) => {
    if (choosenWord.includes(letter) === true) {
      setrightLetters([...rightLetters, letter])
      alert('inclui')
    } else {
      setSelectedLetters([...selectedLetters, letter]);
    }
  }


  return (
    <div className='letters'>
      <div className='keys'>
        {alphabet.map((letter, index) => (
          <div
            key={index}
            className='key'
            onMouseOver={() => handleMouseOver(letter)}
            onMouseOut={handleMouseOut}
            onClick={() => {
              if (selectedLetters.includes(letter)) {
                alert(`${letter} já foi escolhida`)
              } else {

                handleLetterClick(letter)
              }
            }
            }
          >
            <span className={hoveredLetter === letter ? 'red' : ''}>{letter}</span>
          </div>
        ))}
      </div>
      <div className='selected-letters'>
        Selected letters: {selectedLetters.join(', ')}
      </div>
    </div>
  )
}

export default Letters;


///o que fazer?
//agora ao clicar em uma letra que está certa aparece que inclui ela. Tem que fazer a letra certa aparecer na tela. e tambem, fazer com que a forca
//ganhe imagens diferentes ao errar
