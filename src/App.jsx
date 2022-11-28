import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quote from './json/quote.json'
import colors from './json/colors.json'
function App() {

  
  const getRandomFromArray = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }
  const [quotesRandom, setQuotesRandom] = useState(getRandomFromArray(quote))
  const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))
  
  
  const handleClick = ()=> {
    setQuotesRandom(getRandomFromArray(quote))
    setColorRandom(getRandomFromArray(colors))  
  }


  const objStyle ={
    backgroundColor: colorRandom
  }


  return (
    <div className="App" style={objStyle}>
      <QuoteBox 
      quotesRandom={quotesRandom} 
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  )
}

export default App
