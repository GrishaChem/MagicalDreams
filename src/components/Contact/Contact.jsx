import React from "react";
import s from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";

const Contact = ({ name, number, contact }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between gap-2 mt-4 p-2 border border-black rounded-lg b">
      <div className="">
        <p className="font-bold">{name}</p>
        <p className="">{number}</p>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => dispatch(deleteContact(contact))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
