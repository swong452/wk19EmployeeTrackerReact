import React from "react";
import Moment from 'react-moment';
import "./style.css";

function Employee(props) {
      return (
        <table className="tableWorkers ">
            <thead>
                <tr>
                    <th></th>
                    <th onClick = {props.sortName}>Name</th>
                    <th>Phone</th>
                    <th>E-mail</th>
                    <th>DOB</th>
                </tr>
            </thead>

            <tbody className= "">
                {props.employee.map(result => (
                    <tr className="table" key={result.login.uuid}>
                     

                        <td> <img src={result.picture.large} alt="" /></td>
                        <td>{result.name.first + " " + result.name.last}  </td>
                        <td>{result.cell}</td>
                        <td className="email"><a href={result.email}>{result.email}</a></td>
                        <td><Moment format="MM/DD/YYYY">{result.dob.date}</Moment></td>

                    </tr>
                ))}
            </tbody>
        </table >
    )

}

export default Employee