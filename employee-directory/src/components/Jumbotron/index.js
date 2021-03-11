import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import "./Jumbotron.css"

function Head() {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Employee Database</h1>
            </Container>
        </Jumbotron>
    )
}

export default Head;