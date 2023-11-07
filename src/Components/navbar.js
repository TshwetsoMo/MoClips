import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import {useState} from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils";


function BasicNavbar(){

    const Navigation = () => {
        const [searchValue, setSearchValue] = useState('');
    }
    const handleInputChange = (event) => {
        
    }
    const handleSearch = () => {
        
    }
    
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">MoClips</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Landing</Nav.Link>
                    <Nav.Link href="/compare">Compare</Nav.Link>
                    <Nav.Link href="/time">Timeline</Nav.Link>

                </Nav>
                <div className="navigation">
                    <div className="logo"></div>
                    <div className="search-container">
                        <input
                        type="text"
                        placeholder="Search..."
                        onChange={handleInputChange}
                        />
                        <button onClick={handleSearch}>Search</button>
                    </div>

                </div>
            </Container>
        </Navbar>
    )
}

export default BasicNavbar;