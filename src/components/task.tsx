"use client";
import React, { useState } from "react";

interface UserDetails {
  firstName: string;
  lastName: string;
  number: number;
}
export default function Task() {
  const [userDetails, setUserDetails] = useState<UserDetails[]>([]);

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [number, setNumber] = useState(0);

  const handleSubmit = () => {
    const newUser = { firstName, lastName, number };
    setUserDetails([...userDetails, newUser]);
    setFirstName("");
    setLastName("");
    setNumber(0);
    console.log(userDetails, "UserDetails");
  };

  return (
    <div>
      <div>
        <input
          placeholder="Enter your Fname"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          value={firstName}
        />
        <input
          placeholder="Enter your Lname"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          value={lastName}
        />
        <input
          placeholder="Enter your Number"
          onChange={(e) => {
            setNumber(Number(e.target.value));
          }}
          value={number}
        />
      </div>
      <button style={{ backgroundColor: "red" }} onClick={handleSubmit}>
        Add
      </button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Number</th>
          </tr>
        </thead>
        {userDetails.map((user, index) => (
          <tr key={index}>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.number}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
