import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Container,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Home.css';

// ... (previous imports)

const StudentList1 = () => {
  const { studentList, deleteStudent } = useStudentContext();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  
  const handleToggleRow = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleDetailsClick = (e) => {
    // Prevent the click event from propagating to the card and triggering handleToggleRow
    e.stopPropagation();
  };

  const filteredStudents = studentList.filter((student) => {
    const searchLowerCase = searchQuery.toLowerCase();
    return (
      student.department.toLowerCase().includes(searchLowerCase) ||
      student.usn.toLowerCase().includes(searchLowerCase)
    );
  });
  

  return (
    <div className='Studentlist'>
    <Container component="main" maxWidth="lg">
      <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px' }}>
        <h2 style={{color:'black'}}>Student List</h2>
        
        <TextField
          label="Search by Department or USN"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          fullWidth
          margin="normal"
        />

        {filteredStudents.map((student, index) => (
          <Accordion
            key={index}
            expanded={expandedIndex === index}
            onClick={() => handleToggleRow(index)}
          >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">
                  {student.name} - {student.usn} - {student.department}- Attendance: {student.attendance}%
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <TableContainer>
                  <Table>
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
               
              </AccordionDetails>
            </Accordion>
          ))}
      </div>
      {/* Department Page Component */}
      {/* ... (unchanged) */}
    </Container>
    </div>
  );
};

export default StudentList1;
