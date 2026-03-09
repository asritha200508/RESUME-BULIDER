import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {

  const [data, setData] = useState({
    name: "",
    title: "",
    phone: "",
    email: "",
    location: "",
    dob: "",
    gender: "",
    objective: "",
    skills: "",
    education: [],
    projects: [],
    experience: []
  });

  return (
    <div className="container">

      <h1>Resume Builder</h1>

      <div className="main">

        <ResumeForm data={data} setData={setData} />

        <ResumePreview data={data} />

      </div>

    </div>
  );
}

export default App;