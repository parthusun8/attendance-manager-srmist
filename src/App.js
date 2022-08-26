import { useState } from "react";
import "./App.css";
import Login from "./Login/Login.js";
import CourseCard from "./courseCard/courseCard";
import { useEffect } from "react";



function App() {

  // useEffect(() => {
  //   // Update the document title using the browser API
  //   const a = document.getElementById("course--div");
  //   console.log(a);
  //   for(let i=0; i< courses.length; i++){
  //     a.appendChild(<CourseCard course_info={courses[i]}/>)
  //   }
  // });
  function course_html(){
    const a = courses.map((course, i)=>{
        return <CourseCard key={i} course_info={course} />
      });
      return a;
  }

  const [courses, setCourses] = useState([]);
  const [internal_marks, setMarks] = useState([]);
  const [timetable, setTimeTable] = useState([]);
  const [user, setuser] = useState({});
  const [loginbool, setlogin] = useState(false);


  function set_all_data_here(course, marks, tt, user, login){
    setCourses(course);
    setMarks(marks);
    setTimeTable(tt);
    setuser(user);
    setlogin(login);
    console.table(course);
    console.table(marks);
    console.table(tt);
    console.table(user);
  }

  return (
    <div className="App">
      

      {loginbool ? (
        <div className="card--container">
          {course_html()}
        </div>
      ) : (
        <Login
          setter = {set_all_data_here}
        />
      )}
    </div>
  );
}

export default App;
