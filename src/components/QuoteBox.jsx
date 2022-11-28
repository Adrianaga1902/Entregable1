import React from 'react'

const QuoteBox = ({quotesRandom, handleClick, colorRandom}) => {

    const objStyle ={
        color: colorRandom
    }
    const objStyleBtn ={
        backgroundColor: colorRandom
      }

    return (
        <article className='card' style={objStyle}>
            <i className="fa-solid fa-quote-left"></i>
            <p className='card_quote'>{quotesRandom.quote}</p>
            <h1 className='card_author'>{quotesRandom.author}</h1>
            <button className='card_btn' onClick={handleClick} style={objStyleBtn}>&gt;</button>
        </article>
    )
}

export default QuoteBox