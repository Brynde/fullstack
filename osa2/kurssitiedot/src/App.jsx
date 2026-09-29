const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = ({ part }) => {
  return (
    <div>
      <li>{part.name} {part.exercises}</li>
    </div>
  )
}

const Course = ({course}) => {
  const parts = course.parts
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
        {parts.map(part => 
        <Content key={part.id} part={part} />
        )}
      <p>Total of {total} exercises</p>
    </div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }


  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App