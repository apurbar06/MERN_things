import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import "../style.css";

function Add() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState(0);

  const addNewNumber = () => {
    Axios.post("http://localhost:8080/add-phone", { name, phone });
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/get">Get Numbers</Link>
          </li>
          <li>
            <Link to="/update">Update Numbers</Link>
          </li>
        </ul>
      </nav>

      <label htmlFor="">Name: </label>
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <br />
      <label htmlFor="">Phone: </label>
      <input
        type="number"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
      />
      <br />
      <br />

      <button onClick={addNewNumber}>Add New Number</button>
    </div>
  );
}

export default Add;
