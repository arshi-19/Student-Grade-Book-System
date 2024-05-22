// Trash.jsx
import React, { useState } from 'react';
import { Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { useStudentContext } from '../context/StudentContext';
import './Admin.css';
import './Home.css';

const Trash = () => {
  const { deletedStudents, restoreStudent, permanentlyDeleteStudent } = useStudentContext();
  const [expandedIndex, setExpandedIndex] = useState(null);

  if (!Array.isArray(deletedStudents) || deletedStudents.length === 0) {
    return (
      <Container>
        <h2 style={{ color: 'black' }}>Trash</h2>
        <p>No deleted students to display.</p>
      </Container>
    );
  }

  const handleToggleRow = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleRestore = (index) => {
    restoreStudent(index);
  };

  const handlePermanentlyDelete = (index) => {
    permanentlyDeleteStudent(index);
  };

  const handleDetailsClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='trash'>
      <Container>
        <h1 style={{ color: 'black' }}>Trash</h1>
        <div className="card-container">
          {deletedStudents.map((student, index) => (
            <Paper key={index} className={`card ${expandedIndex === index ? 'expanded' : ''}`} onClick={() => handleToggleRow(index)}>
              <div className="card-header">
                <h3>{student.name}</h3>
                <p>USN: {student.usn}</p>
                <p>Department: {student.department}</p>
                <p>Attendence: {student.attendence}</p>

              </div>
              <div className="card-details" onClick={(e) => handleDetailsClick(e)}>
                <TableContainer>
                  <Table border={1}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Subject</TableCell>
                        <TableCell>Total Marks</TableCell>
                        <TableCell>Scored Marks</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {student.subjects.map((subject, subjectIndex) => (
                        <TableRow key={subjectIndex}>
                          <TableCell>{subject.subject}</TableCell>
                          <TableCell>{subject.totalMarks}</TableCell>
                          <TableCell>{subject.scoredMarks}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <Button variant="contained" color="primary" onClick={() => handleRestore(index)}>
                  Restore
                </Button>
                <Button variant="contained" color="secondary" onClick={() => handlePermanentlyDelete(index)}>
                  Permanently Delete
                </Button>
              </div>
            </Paper>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Trash;
