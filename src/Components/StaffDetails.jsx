import './Student.css'

const StaffDetails = () =>{
    const staff = {
        name: 'Aswathy',
        dept: 'Computer Technology-PG',
        qual: 'ME, PhD',
        area:'Software Engineering, DBMS ',
        date:'05-10-2022',
        exp:'3'
      };
    
    return(
        <div className='student-container'> 
        <p className='input'>Name:<span>{staff.name}</span> </p>
        <p className='input'>Department :<span>{staff.dept}</span></p>
        <p className='input'>Qualification:<span>{staff.qual}</span></p>
        <p className='input'>Area of Specialization:<span>{staff.area}</span></p>
        <p className='input'>Date of joining:<span> {staff.date}</span></p>
        <p className='input'>Years of Experience:<span> {staff.exp}</span></p>
      </div>
    )
}

export default StaffDetails
