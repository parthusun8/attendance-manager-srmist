import React from "react";
import "./courseCard.css";

function CourseCard({ course_info }) {
  console.table(course_info);
  return (
    <div className="course--card">
      <div className="course--details">
        <span>{course_info.subject_code}</span>
        <span>{course_info.subject_name}</span>
        <div className="attendance--details">
          <div className="small-dets">
            <span>Total</span>
            <span>{course_info.conducted_hours}</span>
          </div>
          <div className="small-dets">
            <span>Absent</span>
            <span>{course_info.absent_hours}</span>
          </div>
          <div className="small-dets">
            <span>Present</span>
            <span>{course_info.conducted_hours - course_info.absent_hours}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
