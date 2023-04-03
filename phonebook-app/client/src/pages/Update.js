import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
// import './App.css';

function Update() {
  const [phonebook, setPhonebook] = useState([]);
  const [newPhone, setNewPhone] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:8080/get-phone").then((res) => {
      setPhonebook(res.data.data.phoneNumbers);
    });
  }, []);

  const updatePhone = (id) => {
    Axios.put(`http://localhost:8080/update-phone/${id}`, {
      phone: newPhone
    });
  };

  const deletePhone = (id) => {
    Axios.delete(`http://localhost:8080/delete-phone/${id}`);
  };

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Add Numbers</Link>
          </li>
          <li>
            <Link to="/get">Get Numbers</Link>
          </li>
        </ul>
      </nav>
      {phonebook.map((val, key) => {
        return (
          <div key={key} className="phone">
            <h1>{val.name}</h1>
            <h1>{val.phone}</h1>
            <input
              type="number"
              placeholder="update Phone..."
              onChange={(e) => {
                setNewPhone(e.target.value);
              }}
            />
            <button
              className="update-btn"
              onClick={() => {
                updatePhone(val._id);
                console.log(val._id);
              }}
            >
              Update
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                deletePhone(val._id);
                console.log(val._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Update;
