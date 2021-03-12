import React, { Component } from "react";
import API from "../../Utils/API";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Main.css"


class Main extends Component {
    state = {
        employees: [],
        search: ""
    };



    loadEmployee = () => {
        API.Employee()
            .then(res =>
                this.setState({ employees: res.data.results }
                )

            )
            .catch(err => console.log(err));
    };

    componentDidMount() {
        this.loadEmployee()


    }

    changeSearch = (e) => {
        this.setState({ search: e.target.value })

    }



    employeeSearch = () => {

        {
            this.state.employees.map(({ name }) => {
                return (name.first.filter(new => name.first.includes(this.state.search.toLowerCase())))
            }
            )
        }
    }



    // getSearchResults() {
    //     const searchedUser = this.state.employees.filter(user => this.state.search.indexOf(user.name.first) > -1 || this.statesearch.indexOf(user.name.last) > -1)
    //     console.log(searchedUser)
    //     this.setState({ employees: searchedUser })
    // }




    render() {

        // console.log(this.state.employees)
        console.log(this.state.search)

        return (

            <div>
                <Row>
                    <Col> <input className="sort" type="text" value={this.state.search} onChange={this.changeSearch}></input></Col>
                </Row>

                {this.state.employees.map(({ cell, email, login, location, name, picture }) => {

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
