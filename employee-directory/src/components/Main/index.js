import React, { Component } from "react";
import API from "../../Utils/API";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Main.css"


class Main extends Component {
    state = {
        employees: [],
        search: "",
        filteredEmployees: []
    };



    loadEmployee = () => {
        API.Employee()
            .then(res =>
                this.setState({ employees: res.data.results, filteredEmployees: res.data.results })

            )
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadEmployee()


    }

    changeSearch = (e) => {
        this.setState({ search: e.target.value }, () => {
            this.setState({ filteredEmployees: this.state.employees.filter(data => data.name.first.toLowerCase().includes(this.state.search.toLowerCase())) });
        });
    };


    render() {

        // console.log(this.state.employees)
        console.log(this.state.search)

        return (

            <div>
                <Row>
                    <Col> <input className="sort" type="text" value={this.state.search} onChange={this.changeSearch}></input></Col>
                </Row>

                {this.state.filteredEmployees.map(({ cell, email, login, location, name, picture }) => {

                    return (

                        < ul >
                            <Container fluid="md">
                                <Row key={login.password}>
                                    <Col key={login.password}>  <img src={picture.large} alt="employee" /></Col>
                                    <Col > {name.first} {name.last}</Col>
                                    <Col > {location.country}</Col>
                                    <Col >{email}</Col>
                                    <Col >{cell}</Col>
                                </Row>
                            </Container>
                        </ul>
                    );
                })
                }


            </div >
        );

    }

}
export default Main;
