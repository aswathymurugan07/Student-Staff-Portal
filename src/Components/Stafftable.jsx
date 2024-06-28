// import React, { useState } from 'react';
// import './StaffTable.css'

// const Stafftable = () => {
 
//   const [students, setStudents] = useState([
//     { name: 'Aswathy', rollNo: '20ISR006', english: 85, tamil: 65, maths: 99, physics:78, chemistry:98,total:458, grade:'A' },
//     { name: 'Murugan', rollNo: '20ISR028', english: 92, tamil: 78, maths: 95, physics:68, chemistry:89,total:464, grade:'O' },
//     { name: 'Abirami', rollNo: '20ISR001', english: 65, tamil: 92, maths: 87, physics:81, chemistry:67,total:399, grade:'B' },
//     { name: 'Mukesh', rollNo: '20ISR022', english: 98, tamil: 85, maths: 56, physics:56, chemistry:34,total:374, grade:'C' },
//     { name: 'Sajitha', rollNo: '20ISR044', english: 79, tamil: 90, maths: 88, physics:88, chemistry:86,total:430, grade:'B' },   
    
//   ]);

//   const [filterRollNo, setFilterRollNo] = useState('');
//   const [filteredStudents, setFilteredStudents] = useState(students);
  

//   const handleFilterChange = (e) => {
//     setFilterRollNo(e.target.value);
//   };

//   const handleFilterClick = () => {
//     const normalizedFilter = filterRollNo.toLowerCase(); 
//     const filter = students.filter(student => student.rollNo.toLowerCase().includes(normalizedFilter))
//     setFilteredStudents(filter)
//   };

//   const handleSort = () =>{
//     const sortTotal=[...students].sort((a,b) => b.total-a.total)
//     setFilteredStudents(sortTotal)
//   }

//   const handleDelete = (targetIndex) =>{
//     const deleteData = filteredStudents.filter((x,index)=>targetIndex!=index)
//     setFilteredStudents(deleteData)
//   }
  

//   return (
//     <div>
//       <h1>Student Marks </h1>
//       <input type="text" placeholder="Enter Roll No" value={filterRollNo} onChange={handleFilterChange}/>
//       <button className='btn5' onClick={handleFilterClick}>Search</button>
      
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Roll No</th>
//             <th>English</th>
//             <th>Tamil</th>
//             <th>Maths</th>
//             <th>Physics</th>
//             <th>Chemistry</th>
//             <th>Total Mark<button onClick={handleSort}>Sort</button></th>
//             <th>Grade</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredStudents.map((student, index) => (
//             <tr key={index}>
//               <td>{student.name}</td>
//               <td>{student.rollNo}</td>
//               <td>{student.english}</td>
//               <td>{student.tamil}</td>
//               <td>{student.maths}</td>
//               <td>{student.physics}</td>
//               <td>{student.chemistry}</td>
//               <td>{student.total}</td>
//               <td>{student.grade}</td>
//               <td><button>Edit</button>
//               <button onClick={()=>handleDelete(index)}>Delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Stafftable;