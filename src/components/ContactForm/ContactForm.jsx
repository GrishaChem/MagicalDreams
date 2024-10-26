import { Field, Form, Formik } from "formik";
import React, { useId } from "react";
import s from "../ContactForm/ContactForm.module.css";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .min(3, "Number must be at least 3 characters")
      .max(250, "Number must be at most 250 characters")
      .required("Number is required"),
  });

  const handleSubmit = (valuess, options) => {
    dispatch(addContact(valuess));
    options.resetForm();
  };

  const id = useId();
  return (
    <div className={s.container}>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">
              Add your "Magical Dream" now!
            </h1>
            <p className="py-6">
              Write down your "Magical Dream", your goal or your desire{" "}
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <Formik
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              initialValues={initialValues}
            >
              {({ errors, touched }) => (
                <Form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Headline</span>
                    </label>
                    <Field
                      className="input input-bordered"
                      name="name"
                      placeholder="Type a headline"
                      id={id}
                    ></Field>
                    {errors.name && touched.name ? (
                      <div className={s.error}>{errors.name}</div>
                    ) : null}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">The Dream</span>
                    </label>
                    <Field
                      className="input input-bordered"
                      placeholder="Type a dream"
                      name="number"
                      id={id}
                    ></Field>
                    {errors.number && touched.number ? (
                      <div className={s.error}>{errors.number}</div>
                    ) : null}
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">
                      Add Dream
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
