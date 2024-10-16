const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  console.log(props);

  const { part1, part2, part3 } = props;
  
  return (
    <>
      <Part part={part1.name} exercises={part1.exercises} />
      <Part part={part2.name} exercises={part2.exercises} />
      <Part part={part3.name} exercises={part3.exercises} />
    </>
  )
}

const Total = (props) => {
  return <p>{`Number of exercises ${props.exercises}`}</p>
}

const Part = (props) => {
  return <p>{`${props.part} ${props.exercises}`}</p>
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
