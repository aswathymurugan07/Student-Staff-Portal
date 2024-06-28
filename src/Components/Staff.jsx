import React, { useState } from 'react';
import './Staff.css'

const Staff = () => {
  const [studentData, setStudentData] = useState({
    rollNo: '',
    name: '',
    subjects: {
      english: '',
      tamil: '',
      maths: '',
      physics: '',
      chemistry: ''
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubjectChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prevData) => ({
      ...prevData,
      subjects: { ...prevData.subjects, [name]: value }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Student Data Submitted: ', studentData);
    alert('Your data has been saved successfully.');
  };

  return (
  <>
    <h1 className='head'>STUDENTS MARK ENTRY</h1>
    <div className='staff-container'> 
    <form onSubmit={handleSubmit}>
        Name: &nbsp;&nbsp;&nbsp;<input type="text" name="name" value={studentData.name} onChange={handleChange} required /><br />
        Roll No: <input type="text" name="rollNo" value={studentData.rollNo} onChange={handleChange} required /><br />
        English: &nbsp;&nbsp;<input type="text" name="english" value={studentData.subjects.english} onChange={handleSubjectChange} required /><br />
        Tamil:  &nbsp;&nbsp;&nbsp;&nbsp;<input type="text" name="tamil" value={studentData.subjects.tamil} onChange={handleSubjectChange} required /><br />
        Maths: &nbsp;&nbsp;&nbsp;<input type="text" name="maths" value={studentData.subjects.maths} onChange={handleSubjectChange} required /><br />
        Physics: &nbsp;&nbsp;<input type="text" name="physics" value={studentData.subjects.physics} onChange={handleSubjectChange} required /><br />
        Biology:&nbsp;&nbsp;<input type="text" name="chemistry" value={studentData.subjects.chemistry} onChange={handleSubjectChange} required /><br />
        <button className='btn' type="submit">Submit</button>
    </form>
    </div>
  </>
  );
};

export default Staff;