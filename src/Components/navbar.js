import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "./navbar.css"; // Import the CSS file

function BasicNavbar() {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearch = () => {
    // Implement your search functionality here using the searchValue state
    console.log("Search for: ", searchValue);
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/"><h1>MoClips</h1></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Landing</Nav.Link>
          <Nav.Link href="/compare">Compare</Nav.Link>
          <Nav.Link href="/time">Timeline</Nav.Link>
        </Nav>
        <div className="navigation"><br/>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={searchValue} // Bind input value to searchValue state
              onChange={handleInputChange}
            />
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicNavbar;