import React from 'react';
import './Student.css'

const Student = () => {
  const grades = {
    english: 'A',
    tamil: 'B',
    maths: 'A',
    physics:'B',
    chemistry:'A'
  };

  return (
    <div className='student-container'> 
      <h3>My Score Sheet</h3>
      <p>English: {grades.english}</p>
      <p>Tamil : {grades.tamil}</p>
      <p>Maths: {grades.maths}</p>
      <p>Physics: {grades.physics}</p>
      <p>Biology: {grades.chemistry}</p>
    </div>
  );
};

export default Student;