const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        excercises: 10
      },
      {
        name:'Using props to pass data',
        excercises: 7
      },
      {
        name: 'State of a component',
        excercises: 14
      }
    ]
  }
  

  const Header = (props) => {
    return (
      <div>
        <h1>{props.course.name}</h1>
      </div>
    ) 
  }  

  const Content = (props) => {
    return (
      <div>
        <p>{props.course.parts[0].name} {props.course.parts[0].excercises}</p>
        <p>{props.course.parts[1].name} {props.course.parts[1].excercises}</p>
        <p>{props.course.parts[2].name} {props.course.parts[2].excercises}</p>
      </div>
    )
  } 


  const Total = (props) => {
    return (
      <div>
        <p> Total Excercises {course.parts[0].excercises + 
        course.parts[1].excercises + 
        course.parts[2].excercises}
         </p>
      </div>
    )
  }


  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} /> 
    </div>
  )
}

export default App