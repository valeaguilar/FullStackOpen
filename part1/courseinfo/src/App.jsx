
const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.data[0].part} exercise={props.data[0].exercise} />
      <Part part={props.data[1].part} exercise={props.data[1].exercise} />
      <Part part={props.data[2].part} exercise={props.data[2].exercise} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.total}
      </p>
    </div>
  )
}




const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const data = [
    {part: part1, exercise: exercises1},
    {part: part2, exercise: exercises2},
    {part: part3, exercise: exercises3},
  ]

  return (
    <div>
      <Header course={course} />
      <Content data={data} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App