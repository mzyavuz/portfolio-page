import React from "react";

/* Add grid of 4 education cells */
/* Each cell should have a title and description */
/* Use the following data for the cells */
const educationData = [
  {
    title: "Mathematics Education '20 ",
    description: "MSc in Mathematics Education at Bogazici University, Turkey.",
  },
  {
    title: "Project Management '22",
    description: "Project Management at Coursera.",
  },
  {
    title: "Mobile Application Development with Flutter '22",
    description:
      "Developing Mobile Application with Flutter at Google Game and Application Academy.",
  },
  {
    title: "Software Engineering '26 ",
    description: "BSc in Software Engineering at Bogazici University, Turkey.",
  },
];

const Education = () => {
  return (
    <section className="light" id="education">
        <div className="center-text">
      <h2>Education</h2>
      <hr></hr>
        </div>
      <div className="grid">
        {educationData.map((education, index) => (
          <div key={index} className="cell center-text">
            <h3>{education.title}</h3>
            <p>{education.description}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
