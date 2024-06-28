import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filterRollNo: '',
  filteredStudents: [], // Ensure this is initialized as an empty array
  students: [
    { name: 'Aswathy', rollNo: '20ISR006', english: 85, tamil: 65, maths: 99, physics: 78, chemistry: 98, total: 458, grade: 'A' },
    { name: 'Murugan', rollNo: '20ISR028', english: 92, tamil: 78, maths: 95, physics: 68, chemistry: 89, total: 464, grade: 'O' },
    { name: 'Abirami', rollNo: '20ISR001', english: 65, tamil: 92, maths: 87, physics: 81, chemistry: 67, total: 399, grade: 'B' },
    { name: 'Mukesh', rollNo: '20ISR022', english: 98, tamil: 85, maths: 56, physics: 56, chemistry: 34, total: 374, grade: 'C' },
    { name: 'Sajitha', rollNo: '20ISR044', english: 79, tamil: 90, maths: 88, physics: 88, chemistry: 86, total: 430, grade: 'B' },
  ],
};

export const staffSlice = createSlice({
  name: 'staff',
  initialState,
  reducers: {
    setFilterRollNo: (state, action) => {
      state.filterRollNo = action.payload;
    },
    filterStudents: (state) => {
      const normalizedFilter = state.filterRollNo.toLowerCase();
      state.filteredStudents = state.students.filter(student =>
        student.rollNo.toLowerCase().includes(normalizedFilter)
      );
    },
    sortStudentsByTotal: (state) => {
      state.students.sort((a, b) => b.total - a.total);
      state.filteredStudents = [...state.students]; 
    },
    deleteStudent: (state, action) => {
      state.filteredStudents = state.filteredStudents.filter((student, index) =>
        action.payload !== index
      );
    },
  },
});

export const { setFilterRollNo, filterStudents, sortStudentsByTotal, deleteStudent } = staffSlice.actions;

export default staffSlice.reducer;