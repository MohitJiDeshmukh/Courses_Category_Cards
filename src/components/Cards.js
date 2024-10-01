import React from "react";
import Card from "./Card";
import { useState } from "react";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  const [likedCourse, setLikedCourse] = useState([]); // intialize with empty array
  //create array that stored which courses are liked
  //when first time render page array is empty

  function getCourses() {
    if (category === "All") {
      let allCourses = [];

      Object.values(courses).forEach((array) => {
        array.forEach((courseData) => {
          allCourses.push(courseData);
        });
      });
      return allCourses;
    } else {
      //show specific categories data
      return courses[category];
    }
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourse={likedCourse}
          setLikedCourse={setLikedCourse}
        />
      ))}
    </div>
  );
};

export default Cards;
