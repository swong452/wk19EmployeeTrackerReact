import React from "react"
import "./style.css";

// SearchBox define the Top Header, and the search box
function SearchBox(props) {
    return (
            <header className="z-depth-3 col s12">
                    <div className="col c6 inputAndButton center-align">
                        <input
                            onChange={props.handleInputChange}
                        //     value = {props.values}
                            type="text"
                            name="search"
                            className=" inputBox "
                            placeholder="Search by name" />
                    </div>
            </header>
    )
}

export default SearchBox