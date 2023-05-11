// This file defines a React component named "App" that sets up routing for a web application.
// It imports several components from other files: StudentsPage, AddResult, CoursesPage, and HomeScreen. 
// These components are used as the content for different routes in the application.

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentsPage from "./components/Students";
import AddResult from "./components/Results";
import CoursesPage from "./components/Courses";
import HomeScreen from "./components/HomeScreen";


// The component returns a Router component from the react-router-dom library, 
// which sets up client-side routing for the application. Inside the Router component, 
// the HomeScreen component is rendered as the default content of the application.

// The Routes component defines the different routes available in the application. 
// There are three Route components defined for /Students, /Results, and /Courses. 
// Each Route component specifies a path prop that defines the URL path to match for that route, 
// and an element prop that specifies the component to render for that route.

function App() {
  return (
    <Router>
      <HomeScreen />
      <Routes>
        <Route path="/Students" element={<StudentsPage/>}/>
        <Route path="/Results" element={<AddResult/>} />
        <Route path="/Courses" element={<CoursesPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
