import React from "react";

function ResumePreview({ data }) {

  const skillsArray = data.skills.split(",");

  return (
    <div className="resume">

      <div className="left">

        <h2>{data.name}</h2>
        <h4>{data.title}</h4>

        <h3>Personal Details</h3>
        <p>{data.phone}</p>
        <p>{data.email}</p>
        <p>{data.location}</p>
        <p>DOB: {data.dob}</p>
        <p>{data.gender}</p>

        <h3>Skills</h3>

        <div className="skills">
          {skillsArray.map((skill, index) => (
            <span key={index} className="skill">
              {skill}
            </span>
          ))}
        </div>

      </div>

      <div className="right">

        <h3>Objective</h3>
        <p>{data.objective}</p>

        <h3>Education</h3>

        <table>

          <thead>
            <tr>
              <th>S.No</th>
              <th>College</th>
              <th>Year</th>
              <th>%</th>
            </tr>
          </thead>

          <tbody>

            {data.education.map((edu, index) => (
              <tr key={index}>
                <td>{edu.sno}</td>
                <td>{edu.school}</td>
                <td>{edu.year}</td>
                <td>{edu.percent}</td>
              </tr>
            ))}

          </tbody>

        </table>

        <h3>Projects</h3>

        {data.projects.map((proj, index) => (
          <div key={index}>
            <b>{proj.title}</b>
            <p>{proj.description}</p>
          </div>
        ))}

        <h3>Work Experience</h3>

{data.experience.length === 0 ? (
  <p>Fresher / No Work Experience</p>
) : (
  data.experience.map((exp, index) => (
    <div key={index}>
      <b>{exp.company}</b>
      <p>{exp.role}</p>
      <p>{exp.years}</p>
    </div>
  ))
)}

      </div>

    </div>
  );
}

export default ResumePreview;