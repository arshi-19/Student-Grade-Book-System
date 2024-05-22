// ExpandedView.js
import React from 'react';

const ExpandedView = ({ student }) => {
  return (
    <div>
      <h2>Student Details</h2>
      <div>
        <h3>{student.name}</h3>
        <p>USN: {student.usn}</p>
        <p>Department: {student.department}</p>
      </div>
      <div>
        <h3>Subjects:</h3>
        <table border={1}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Total Marks</th>
              <th>Scored Marks</th>
            </tr>
          </thead>
          <tbody>
            {student.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.subject}</td>
                <td>{subject.totalMarks}</td>
                <td>{subject.scoredMarks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpandedView;
