import React, { useState,useEffect } from 'react';
import axios from 'axios';
import "../Styles/main.css";
const API_URL = 'http://127.0.0.1:5000';

//Set all controls to null initially 
const StudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [familyName, setFamilyName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [notification, setNotification] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();

    // Check if all controls are filled
    if (firstName === '' || familyName === '' || dateOfBirth === '') {
      setNotification('Please fill in all fields.');
      return;
    }

    // Check if date of birth is valid
    const dob = new Date(dateOfBirth);
    if (isNaN(dob.getTime())) {
      setNotification('Please enter a valid date of birth.');
      return;
    }

    // Check if student is at least 10 years old
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    if (age < 10) {
      setNotification('Student must be at least 10 years old.');
      return;
    }

    // Add new student to the system
    const newStudent = {
      first_name:firstName,
      last_name:familyName,
      date_of_birth:dob.toDateString()
    };
    await axios.post(`${API_URL}/students`,newStudent)
    setStudents([...students, newStudent]);

    // Show notification and clear controls
    setNotification('New student added.');
    setFirstName('');
    setFamilyName('');
    setDateOfBirth('');
  };

  //  Fetch all courses and students on page load
   useEffect(() => {
    axios.get(`${API_URL}/students`).then((response) => {
      setStudents(response.data);
    });
  }, []);
  return (
    <div>
      <h1>Students</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="familyName">Family Name:</label>
          <input
            type="text"
            id="familyName"
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {notification && <p>{notification}</p>}

      {/* Display the list */}
      <h2>Student List</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Family Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.first_name}</td>
              <td>{student.last_name}</td>
              <td>{student.date_of_birth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentsPage;