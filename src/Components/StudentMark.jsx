import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterRollNo, filterStudents, sortStudentsByTotal, deleteStudent } from '../reducers/staffSlice';
import './StaffTable.css';

const StudentMark = () => {
  const dispatch = useDispatch();
  const { filterRollNo, filteredStudents } = useSelector((state) => state.staff); 

  useEffect(() => {
    dispatch(filterStudents());
  }, [filterRollNo, dispatch]);

  const handleFilterChange = (e) => {
    dispatch(setFilterRollNo(e.target.value));
  };

  const handleSort = () => {
    dispatch(sortStudentsByTotal());
  };

  const handleDelete = (index) => {
    dispatch(deleteStudent(index));
  };

  return (
    <div>
      <h1>Student Marks</h1>
      <input type="text" placeholder="Enter Roll No" value={filterRollNo} onChange={handleFilterChange} />
      <button className="btn5" onClick={() => dispatch(filterStudents())}>Search</button>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll No</th>
            <th>English</th>
            <th>Tamil</th>
            <th>Maths</th>
            <th>Physics</th>
            <th>Chemistry</th>
            <th>Total Mark<button onClick={handleSort}>Sort</button></th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.rollNo}</td>
              <td>{student.english}</td>
              <td>{student.tamil}</td>
              <td>{student.maths}</td>
              <td>{student.physics}</td>
              <td>{student.chemistry}</td>
              <td>{student.total}</td>
              <td>{student.grade}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentMark;