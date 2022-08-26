import React from "react";
import "./courseCard.css";

function CourseCard({ course_info }) {
  // console.table(course_info);

  function calculation(){
    let present = course_info.conducted_hours - course_info.absent_hours;
    const per_attendance = (present*100)/course_info.conducted_hours;

    if(per_attendance > 75){
      const margin = present/3;
      return margin;
    }
    else{
      const required = (course_info.absent_hours*4) - course_info.conducted_hours;
      return -1*required;
    }
  }

  return (
    <div className="course--card">
      <div className="course--details">
        <span>{course_info.subject_name}</span>
        <span className="small">{course_info.subject_code}</span>
        <div className="small-dets--margin">
        {calculation() > 0 ? <span className="positive">Margin</span> : <span className="negative">Required</span>}
        <span className="mg-4">{calculation() > 0 ? Math.floor(calculation()) : -1*Math.floor(calculation())}</span>
        </div>
        <div className="attendance--details">
          <div className="small-dets total">
            <span>Total</span>
            <span >{course_info.conducted_hours}</span>
          </div>
          <div className="small-dets absent">
            <span>Absent</span>
            <span>{course_info.absent_hours}</span>
          </div>
          <div className="small-dets present">
            <span>Present</span>
            <span>{course_info.conducted_hours - course_info.absent_hours}</span>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
