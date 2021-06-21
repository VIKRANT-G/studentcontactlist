import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddContact = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");

  const craeteContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name:
        name.split(" ")[0][0].toUpperCase() +
        name.split(" ")[0].slice(1) +
        " " +
        name.split(" ")[1][0].toUpperCase() +
        name.split(" ")[1].slice(1),
      // phone: phone,
      qualification: qualification,

      email: email,
    };
    dispatch(addContact(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Student</div>
      <div className="card-body">
        <form onSubmit={(e) => craeteContact(e)}>
          <div className="form-group">
            <input
              required
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            {/* <input
              type="text"
              required
              className="form-control"
              placeholder="Enter Your Phone Qualfication"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            /> */}
            <label for="country">Qualification:</label>
            <select
              id="qualification"
              required
              name="qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <option value="">SELECT</option>
              <option value="MCA">MCA</option>
              <option value="BCA">BCA</option>
              <option value="BSC">BSC</option>
              <option value="MSC">MSC</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="email"
              required
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Create Student
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
