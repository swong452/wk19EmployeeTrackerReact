import React from 'react';
import API from "./utils/API";
import Employee from "./components/Employee"
import SearchBox from "./components/SearchBox"
import Header from "./components/Header"
import './App.css';

// Important to save the state of both Original list of employee, and FilteredEmployees
// original employee list is needed; as the starting base that has all users, then user can add search filter.
// filtered employee list State also needed to be stored, because of following reason:
// Suppose if you add filter; and resulting in 5 x filtered employee
// Then, you want to sort this 5 x filtered employees.
// IF you save the state of 5 x employees for sort(); then sort() will perform sorting only on these 5 x employees
// I.E: if you only have the state of all employee; your Sort() can only sort original list of employees
// Not the filtered list. 
class App extends React.Component {
  state = {
    employees: [],
    filteredEmployees: [],
    order: []
  }

  // When page first reload, both filtered and unfilter contain same worker list
  componentDidMount() {
    API.getUsers().then(res => this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results 
    })).catch(err => console.log(err))
  }

  // when input is changing it will dynamically show the associates names that 
  // match either firstname or Lastname
  handleInputChange = event => {
    const employees = this.state.employees;
    const UserInput = event.target.value;
    const filteredEmployees = employees.filter(employee => (employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1) ||
      employee.name.last.toLowerCase().indexOf(UserInput.toLowerCase()) > -1)

    console.log("handleInputChange called, filteredEmployees ", filteredEmployees);
    this.setState({
      filteredEmployees,

    });
  };

  // Sort by First Name, using sort-compare function
  // Compare will take two values at a time
  // If "a" firstname is "Samson", "b" firtname is Amy
  // a.firsname - b.firstname would yield +ve, since "S" > "A"
  // +ve means True condition. and below, if true,  return +1 (Positive)
  // The Sort() , when sees a +ve; will place the first item, "a.firstname" AFTER "b.firstname"
  // That means samson put After Amy, which is a Ascending sort.
  sortName = () => {
    const filtereds = this.state.filteredEmployees;
    if (this.state.order === "asc") {
      const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? 1 : -1)
      console.log(sorteds)

      this.setState({
        filteredEmployees: sorteds,
        order: "desc"
      })
    } else {
      // The default value of order is not set to "acs"; hence will take following logic:
      // If "a" firstname is "Samson", "b" firtname is Amy
      // a.firsname - b.firstname would yield +ve, since "S" > "A"
      // +ve means True condition. and below, if true,  return -1 (negative)
      // The Sort() , when sees a -ve; will place the first item, "a.firstname", before "b.firstname"
      // That means samson put before Amy, which is a decending sort.
      const sorteds = filtereds.sort((a, b) => (a.name.first > b.name.first) ? -1 : 1)
      console.log(sorteds)

      this.setState({
        filteredEmployees: sorteds,
        order: "asc" // Toggle the order to be asc; so next time when click, is the opposite -> ASC
      })
    }
  }

  render() {
    return (
      <div>
        <Header />

        <SearchBox
          employee={this.state.employees}
          handleInputChange={this.handleInputChange} />

        <Employee
          employee={this.state.filteredEmployees} 
          sortName={this.sortName} />
      </div>

    ) // render() return
  } // render()
}// end Class App


export default App;
