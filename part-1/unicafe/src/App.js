import { useState } from 'react'

const Button = ({text, onClick}) => 
  <button onClick={onClick}>{text}</button>

const StatiticLine = ({text, value}) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

const Statitics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const positive = good / all * 100
  const average = (good - bad) / (good + bad + neutral)

  if (all === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return (
    <div>
      <h2>Statistics</h2>

      <table>
        <tbody>
          <StatiticLine text="good" value={good} />
          <StatiticLine text="neutral" value={neutral} />
          <StatiticLine text="bad" value={bad} />
          <StatiticLine text="all" value={good+neutral+bad} />
          <StatiticLine text="average" value={average} />
          <StatiticLine text="positive" value={positive + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>

      <Button text="good" onClick={() => setGood(good+1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral+1)} />
      <Button text="bad" onClick={() => setBad(bad+1)} />

      <Statitics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App