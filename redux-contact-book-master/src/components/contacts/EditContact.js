import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContact, updateContact } from "../../actions/contactAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditContact = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.contact.contact);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [qualification, setQualification] = useState("");

  useEffect(() => {
    if (contact != null) {
      setName(contact.name);
      setQualification(contact.qualification);
      setEmail(contact.email);
    }
    dispatch(getContact(id));
  }, [contact]);

  const onUpdateContact = (e) => {
    e.preventDefault();

    const update_contact = Object.assign(contact, {
      name:
        name.split(" ")[0][0].toUpperCase() +
        name.split(" ")[0].slice(1) +
        " " +
        name.split(" ")[1][0].toUpperCase() +
        name.split(" ")[1].slice(1),
      qualification: qualification,
      email: email,
    });

    dispatch(updateContact(update_contact));
    history.push("/");
  };
  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a Contact</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateContact(e)}>
          <div className="form-group">
            <input
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
              className="form-control"
              placeholder="Enter Your Qualification"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
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
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-warning" type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditContact;
