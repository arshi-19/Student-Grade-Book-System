import React from 'react';
import { useStudentContext } from '../../context/StudentContext';
import './Admin.css';

const StudentListByDepartment = ({ department }) => {
  const { studentList } = useStudentContext();

  // Filter students by the selected department
  const studentsInDepartment = studentList.filter((student) => student.department === department);

  return (
    <div>
      <h2>{department} Department</h2>
      <div className="card-container">
        {studentsInDepartment.length > 0 ? (
          studentsInDepartment.map((student, index) => (
            <div key={index} className="card">
              <div className="card-header">
                <h3>{student.name}</h3>
                <p>USN: {student.usn}</p>
                <p>Department: {student.department}</p>
              </div>
            </div>
          ))
        ) : (
          <p>No students in this department.</p>
        )}
      </div>
    </div>
  );
};

export default StudentListByDepartment;
