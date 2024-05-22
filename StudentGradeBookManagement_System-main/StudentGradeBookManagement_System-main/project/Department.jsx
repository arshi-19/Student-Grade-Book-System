// Department.js

import React from 'react';
import {
  Card,
  CardContent,
  Typography,
} from '@mui/material';

const Department = ({ departmentName, students }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5">{departmentName}</Typography>
        {/* Render the students for this department */}
        {students.map((student, index) => (
          <div key={index}>
            <Typography>{student.name} - {student.usn}</Typography>
            {/* Add more details as needed */}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Department;
