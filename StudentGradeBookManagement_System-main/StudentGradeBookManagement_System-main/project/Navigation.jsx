// AppRouter.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Admin from './Admin';
import AddStudent from './AddStudent';
import StudentList from './StudentList';
import Trash from './Trash';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

import Student from './Student';
import EditStudent from './EditStudent';

import StudentList1 from './StudentList1';




const AppRouter = ({ students, AddStudentToState }) => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/Admin' element={<Admin />} />
          <Route exact path='/admin/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />

          <Route exact path='/Student' element={<Student />} />
          <Route exact path='/Admin/AddStudent' element={<AddStudent />} />
          <Route exact path='/Admin/StudentList' element={<StudentList />} />
          <Route path="/StudentList/EditStudent/:index" element={<EditStudent />} />
          
          <Route exact path='/Student/StudentList1' element={<StudentList1 />} />


          <Route exact path='/Admin/Trash' element={<Trash />} />
                   


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
