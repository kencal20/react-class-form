import React, { useState } from "react";

const FunctionForm = (props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.name);
    console.log(form.email);
    console.log(form.password);
  };

  return (
    <div>
      <div className="form">

        <label htmlFor="name" className="label">
          Name
        </label>
        <br />
        <input
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="Email" className="label">
          Email
        </label>
        <br />
        <input
          type="Email"
          name="email"
          id="Email"
          value={form.email}
          onChange={handleChange}
        />
        <br />

        <label htmlFor="password" className="label">
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          value={form.password}
          onChange={handleChange}
        />
        <br />

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </div>
    </div>
  );
};

export default FunctionForm;
