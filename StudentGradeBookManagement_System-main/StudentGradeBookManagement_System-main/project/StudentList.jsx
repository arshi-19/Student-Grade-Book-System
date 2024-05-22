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
import './StudentList.css';
import './Home.css';

const StudentList = () => {
  const { studentList, deleteStudent } = useStudentContext();
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = (index) => {
    // Handle deleting a student based on the index
    deleteStudent(index);
  };

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
          <h2 style={{ color: 'black' }}>Student List</h2>

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
                  {student.name} - {student.usn} - {student.department} - Attendance: {student.attendance}%
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
                <div style={{ marginTop: '10px' }}>
                  <Button
                    component={Link}
                    to={`/StudentList/EditStudent/${index}`}
                    variant="outlined"
                    color="primary"
                    style={{ marginRight: '10px' }}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StudentList;
