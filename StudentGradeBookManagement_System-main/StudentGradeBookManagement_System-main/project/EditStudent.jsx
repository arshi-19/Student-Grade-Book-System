import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStudentContext } from '../context/StudentContext';
import {
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Paper,
} from '@mui/material';
import './Home.css'

const EditStudent = () => {
  const navigate = useNavigate();
  const { studentList, updateStudentList } = useStudentContext();
  const { index } = useParams();

  const [name, setName] = useState('');
  const [usn, setUsn] = useState('');
  const [department, setDepartment] = useState('');
  const [subjects, setSubjects] = useState([{ subject: '', totalMarks: 0, scoredMarks: 0 }]);
  const [attendance, setAttendance] = useState(0);

  useEffect(() => {
    const studentDetails = studentList[index];

    if (studentDetails) {
      setName(studentDetails.name);
      setUsn(studentDetails.usn);
      setDepartment(studentDetails.department);
      setSubjects(studentDetails.subjects);
      setAttendance(studentDetails.attendance);

    }
  }, [index, studentList]);

  const handleSubjectChange = (subjectIndex, field, value) => {
    const newSubjects = [...subjects];
    newSubjects[subjectIndex][field] = value;
    setSubjects(newSubjects);
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { subject: '', totalMarks: 0, scoredMarks: 0 }]);
  };

  const handleRemoveSubject = (subjectIndex) => {
    const newSubjects = [...subjects];
    newSubjects.splice(subjectIndex, 1);
    setSubjects(newSubjects);
  };

  const handleSave = () => {
    const updatedStudent = { name, usn,attendance, department, subjects };
    const updatedList = [...studentList];
    updatedList[index] = updatedStudent;

    // Use the updateStudentList function to update the context
    updateStudentList(updatedList);

    // Navigate back to the Student List page
    navigate('/Admin/StudentList');
  };

  return (
    <div className='editstudent'>
    <Container component="main" maxWidth="md">
      <Paper elevation={3} style={{ padding: '20px', background: '#f0f0f0' }}>
        <h2 style={{color:'black'}}>Edit Student</h2>
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
          Update
        </Button>
      </Paper>
    </Container>
    </div>
  );
};

export default EditStudent;
