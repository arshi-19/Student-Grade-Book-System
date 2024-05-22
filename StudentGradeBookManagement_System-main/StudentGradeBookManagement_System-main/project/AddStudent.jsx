// Add necessary imports from Material-UI
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css'
import { useStudentContext } from '../context/StudentContext';
import {
  Button,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  TextField,
  Container,
  Paper,
} from '@mui/material';

const AddStudent = () => {
  const navigate = useNavigate();
  const { addStudent } = useStudentContext();

  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [department, setDepartment] = useState('');
  const [subjects, setSubjects] = useState([{ subject: '', totalMarks: 0, scoredMarks: 0 }]);
  const [attendance, setAttendance] = useState(0);

  const handleSubjectChange = (index, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[index][field] = value;
    setSubjects(newSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subject: '', totalMarks: 0, scoredMarks: 0 }]);
  };

  const handleRemoveSubject = (index) => {
    const newSubjects = [...subjects];
    newSubjects.splice(index, 1);
    setSubjects(newSubjects);
  };

  const handleSave = () => {
    const studentData = { name, usn,attendance, department, subjects };
    addStudent(studentData);

    // Navigate to the Student List page
    navigate('/Admin/StudentList');
  };


  return (
    <div className='addstudent'>
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', background: '#f0f0f0' }}>
        <h2 style={{color:'black'}}>Add Student</h2>
        <TextField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="USN"
          type="text"
          value={usn}
          onChange={(e) => setUsn(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
            label="Attendance"
            type="number"
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
            fullWidth
            margin="normal"
          />

        <FormControl fullWidth margin="normal">
          <InputLabel>Department</InputLabel>
          <Select value={department} onChange={(e) => setDepartment(e.target.value)}>
            <MenuItem value="ISE">Information Science</MenuItem>
            <MenuItem value="CSE">Computer Science</MenuItem>
            <MenuItem value="AI">Artificial Intelligence</MenuItem>
            <MenuItem value="ECE">Electronics</MenuItem>
            <MenuItem value="EEE">Electrical</MenuItem>
          </Select>
        </FormControl>
        <h3>Subjects:</h3>
        {subjects.map((subject, index) => (
          <div key={index}>
            <TextField
              label="Subject"
              type="text"
              value={subject.subject}
              onChange={(e) => handleSubjectChange(index, 'subject', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Total Marks"
              type="number"
              value={subject.totalMarks}
              onChange={(e) => handleSubjectChange(index, 'totalMarks', e.target.value)}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Scored Marks"
              type="number"
              value={subject.scoredMarks}
              onChange={(e) => handleSubjectChange(index, 'scoredMarks', e.target.value)}
              fullWidth
              margin="normal"
            />
            <Button
              type="button"
              variant="outlined"
              color="secondary"
              onClick={() => handleRemoveSubject(index)}
              style={{ marginTop: '10px' }}
            >
              Remove Subject
            </Button>
          </div>
        ))}
        <Button
          type="button"
          variant="outlined"
          color="primary"
          onClick={handleAddSubject}
          style={{ marginTop: '20px' , marginRight: '10px'}}
        >
          Add Subject
        </Button>
        <Button
          type="button"
          variant="contained"
          color="primary"
          onClick={handleSave}
          style={{ marginTop: '20px' }}
        >
          Save
        </Button>
      </Paper>
    </Container>
    </div>
  );
};

export default AddStudent;
