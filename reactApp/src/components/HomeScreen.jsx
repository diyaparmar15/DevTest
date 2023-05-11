import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../Styles/main.css";

// This code defines a functional component called HomeScreen, 
// which renders a navigation bar with links to different pages of the application. 
// It uses the useRef hook to create a reference to the nav element, and defines a 
// showNavbar function that toggles the responsive_nav class on the nav element when 
// the onClick event is triggered on the hamburger menu button.


export default function HomeScreen() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	// The nav element contains a Link component for each page of the application, 
	// and a button component that triggers the showNavbar function when clicked, 
	// causing the navigation bar to expand or collapse depending on its current state.
	// Return Nav Bar

	return (
		<header>
			<h3>Student Result Managment system</h3>
			<nav ref={navRef}>
				<Link to="/">Home</Link>
				<Link to="/Students">Students</Link>
				<Link to="/Courses">Courses</Link>
				<Link to="/Results">Results</Link>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}
