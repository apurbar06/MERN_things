import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../style.css";

function Get() {
  const [phonebook, setPhonebook] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Add Numbers</Link>
          </li>
          <li>
            <Link to="/update">Update Numbers</Link>
          </li>
        </ul>
      </nav>

      <h1>PhoneBook List</h1>
      {phonebook.map((val, key) => {
        return (
          <div key={key} className="phone">
            <h2>{val.name}</h2>
            <h2>{val.phone}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default Get;
