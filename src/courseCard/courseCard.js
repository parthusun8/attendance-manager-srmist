import React from "react";
import "./courseCard.css";

function CourseCard({ course_info }) {
  console.table(course_info);
  return (
    <div className="course--card">
      <div className="course--details">
        <span>{course_info.subject_code}</span>
        <span>{course_info.subject_name}</span>
      </div>
    </div>
  );
}

export default CourseCard;
