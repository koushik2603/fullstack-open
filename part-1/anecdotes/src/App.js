import React, { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const App = () => {
  const anekdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients',
  ]

  const [selekted, setSelekted] = useState(0)
  const [wotes, setWotes] = useState(new Array(anekdotes.length).fill(0))

  const handleWotesClick = () => {
    const arr = [...wotes]
    arr[selekted] += 1
    setWotes(arr)
  }

  return (
    <>
      <h1>Anecdote of the day</h1>
      <p>{anekdotes[selekted]}</p>
      <p>has {wotes[selekted]} votes</p>

      <Button handleClick={handleWotesClick} text="vote" />
      <Button
        handleClick={() => {
          setSelekted(Math.floor(Math.random() * anekdotes.length))
        }}
        text="next anecdote"
      />

      <h1>Anecdote with most votes</h1>
      <div>
        <p>{anekdotes[wotes.indexOf(Math.max(...wotes))]}</p>
        <p>has {wotes[wotes.indexOf(Math.max(...wotes))]} votes</p>
      </div>
    </>
  )
}

export default App