import React from 'react';
import API from "./utils/API";
import Employee from "./components/Employee"
import SearchBox from "./components/SearchBox"
import Header from "./components/Header"
import './App.css';


console.log("Enter My homework APP.js");

class App extends React.Component {
  state = {
    employees: [],
    filteredEmployees: []
  }

  // When page first reload, both filtered and unfilter contain same worker list
  componentDidMount() {
    API.getUsers().then(res => this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results  
    })).catch(err => console.log(err))
  } 

  //when input is changing it will dynamically show the associates names that match in the screen
  handleInputChange = event => {
    const employees = this.state.employees;
    const UserInput = event.target.value;
    console.log("handleInputChange called, with UserInput: ", UserInput);
    const filteredEmployees = employees.filter(employee => employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    )
    console.log("handleInputChange called, filteredEmployees ", filteredEmployees);
    this.setState({
      filteredEmployees,

    });
  }; 

  render() {
    return (
      <div>
        <Header/>
        <SearchBox employee={this.state.employees} handleInputChange={this.handleInputChange} handleSearch={this.handleSearch}> </SearchBox>
        <Employee employee={this.state.filteredEmployees}></Employee>
      </div>

    ) // render() return
  } // render()
}// end Class App


export default App;
