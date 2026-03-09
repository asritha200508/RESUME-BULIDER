import React, { useState } from "react";

function ResumeForm({ data, setData }) {

  const [edu, setEdu] = useState({
    sno: "",
    school: "",
    year: "",
    percent: ""
  });

  const [project, setProject] = useState({
    title: "",
    description: ""
  });

  const [exp, setExp] = useState({
    company: "",
    role: "",
    years: ""
  });

  const [skipExperience, setSkipExperience] = useState(false);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleEduChange = (e) => {
    setEdu({
      ...edu,
      [e.target.name]: e.target.value
    });
  };

  const addEducation = () => {
    setData({
      ...data,
      education: [...data.education, edu]
    });

    setEdu({
      sno: "",
      school: "",
      year: "",
      percent: ""
    });
  };

  const handleProjectChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value
    });
  };

  const addProject = () => {

    setData({
      ...data,
      projects: [...data.projects, project]
    });

    setProject({
      title: "",
      description: ""
    });
  };

  const handleExpChange = (e) => {
    setExp({
      ...exp,
      [e.target.name]: e.target.value
    });
  };

  const addExperience = () => {

    setData({
      ...data,
      experience: [...data.experience, exp]
    });

    setExp({
      company: "",
      role: "",
      years: ""
    });
  };

  const skipExp = () => {
    setSkipExperience(true);
  };

  return (
    <div className="form">

      <h2>Personal Details</h2>

      <input name="name" placeholder="Full Name" onChange={handleChange}/>
      <input name="title" placeholder="Job Title" onChange={handleChange}/>
      <input name="phone" placeholder="Phone" onChange={handleChange}/>
      <input name="email" placeholder="Email" onChange={handleChange}/>
      <input name="location" placeholder="Location" onChange={handleChange}/>
      <input name="dob" placeholder="Date of Birth" onChange={handleChange}/>
      <input name="gender" placeholder="Gender" onChange={handleChange}/>

      <textarea name="objective" placeholder="Career Objective" onChange={handleChange}/>

      <input name="skills" placeholder="Skills (comma separated)" onChange={handleChange}/>

      <h3>Add Education</h3>

      <input name="sno" placeholder="Serial No" value={edu.sno} onChange={handleEduChange}/>
      <input name="school" placeholder="College / School Name" value={edu.school} onChange={handleEduChange}/>
      <input name="year" placeholder="Year of Pass" value={edu.year} onChange={handleEduChange}/>
      <input name="percent" placeholder="Percentage" value={edu.percent} onChange={handleEduChange}/>

      <button type="button" onClick={addEducation}>Add Education</button>

      <h3>Add Project</h3>

      <input name="title" placeholder="Project Title" value={project.title} onChange={handleProjectChange}/>
      <textarea name="description" placeholder="Project Description" value={project.description} onChange={handleProjectChange}/>

      <button type="button" onClick={addProject}>Add Project</button>

      <h3>Work Experience</h3>

      {!skipExperience && (
        <>
          <input name="company" placeholder="Company Name" value={exp.company} onChange={handleExpChange}/>
          <input name="role" placeholder="Role" value={exp.role} onChange={handleExpChange}/>
          <input name="years" placeholder="Years" value={exp.years} onChange={handleExpChange}/>

          <button type="button" onClick={addExperience}>Add Experience</button>
        </>
      )}

      <button type="button" onClick={skipExp}>
        Skip Work Experience
      </button>

    </div>
  );
}

export default ResumeForm;