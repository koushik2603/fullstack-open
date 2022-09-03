const Heder = (props) => {
  return (
    <h1>{props.name}</h1>
  )
}

const Part = (props) => {
  return (
    <p>{props.name} {props.exercises}</p>
  )
}

const Cntent = (props) => {
  return (
    <div>
      {props.parts.map(part => <Part name={part.name} exercises={part.exercises} />)}
    </div>
  )
}

const Totl = (props) => {
  const totl = props.parts.reduce((acc, curr) => {
    return acc + curr.exercises
  }, 0)

  return (
    <p>Number of exercises {totl}</p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Heder name={course.name} />
      <Cntent parts={course.parts}/>
      <Totl parts={course.parts} />
    </div>
  )
}

export default App