import React from "react";
import s from "../Contact/Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";

const Contact = ({ name, number, contact }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center justify-between gap-2 mb-4 p-2 border border-black rounded-lg shadow-2xl">
      <div className="w-full">
        <p className="font-bold inline-block">{name}</p>
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
