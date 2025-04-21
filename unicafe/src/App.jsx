import { useState } from 'react'

// a proper place to define a component

  // saved components for sum, ave, and positive
  // const Sum = (props) => {
  //   return <p>(props.good + props.neutral + props.bad)</p>
  // }

  // const Average = (props) => {
  //   return ((props.good - props.bad) / (props.good + props.neutral + props.bad))
  // }

  // const Positive = (props) => {
  //   return ((props.good/(props.good + props.neutral + props.bad)*100))
  // }

  const StatisticLine = (props) => {
    return ( 
        <tr>
          <td>{props.text} </td>
          <td>{props.value} </td>
        </tr>
    )
  }

  const Statistics = (props) => {
    if (!(props.good || props.neutral || props.bad)) {
      return ( "No feedback given")
    }

    return (
      <table>
        <tbody>
          <StatisticLine text="good " value ={props.good} />
          <StatisticLine text="neutral " value ={props.neutral} />
          <StatisticLine text="bad " value ={props.bad} />
          <StatisticLine text="all " value ={(props.good + props.neutral + props.bad)} />
          <StatisticLine text="average " value ={(props.good - props.bad) / (props.good + props.neutral + props.bad)} />
          <StatisticLine text="positive " value ={(props.good/(props.good + props.neutral + props.bad)*100)} />
        </tbody>
      </table>
    )
}


const Button =(props) => {
  return (
    <div>
      <button onClick={props.handleClick}> {props.text} </button>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

const goodClick = () => {
  setGood(good + 1)
}
const neutralClick = () => {
  setNeutral(neutral + 1)
}
const badClick = () => {
  setBad(bad + 1)
}
  return (
    <div>
      <h2> give feedback </h2>
      <Button handleClick={goodClick} text="good" />
      <Button handleClick={neutralClick} text="neutral" />
      <Button handleClick={badClick} text="bad" />
      <h2> statistics</h2>
      <Statistics  good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App