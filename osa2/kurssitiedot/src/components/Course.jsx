const Courses = ({courses}) =>{
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


  return(
    <div>
      {courses.map(course =>
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}

export default Courses