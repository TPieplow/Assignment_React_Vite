import React from 'react';
import './Form.css';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const text = (<>
    Leave us a message <br /> for any information
</>)

const Form = () => {
    const succesBox = () => {
        toast.success("Form submitted successfully")
    }

    const alertBox = () => {
        toast.error("Couldn't submit form")
    }
 
    const regexEmail = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/
    const { handleChange, handleBlur, handleSubmit, isSubmitting, errors, touched, values } = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },

        validationSchema: Yup.object({
            name: Yup.string()
                .required('Name is required')
                .min(2, "Name must contain atleast two characters"),
            email: Yup.string()
                .required('Email is required')
                .matches(regexEmail, "Not a valid e-mail"),
            message: Yup.string()
                .required('Text message is required')
                .min(10, "Text area must contain atleast 10 characters")
                .max(200, "Textarea must contain a maximum of 200 characters")
        }),

        onSubmit: async (values, actions) => {
            const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            // ok instead of 200 since it covers the whole 200-section.
            if (result.ok) {
                succesBox();

                actions.resetForm();
            } else {
                alertBox();
            }
        }
    })

    return (
        <section className="form-section" >
            <ToastContainer position='top-left' />
            <div className="container">
                <form onSubmit={handleSubmit} noValidate>
                    <div className="title">
                        <h2>{text}</h2>
                    </div>
                    <input
                        className={errors.name && touched.name ? "input-error" : ""}
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        id="name"
                        placeholder="Name*"
                        name="name"
                        title="Enter your name"
                        autoComplete="off"
                        tabIndex="1"
                        onBlur={handleBlur}
                    />
                    {errors.name && touched.name && <p className='error'>{errors.name}</p>}
                    <input
                        className={errors.email && touched.email ? "input-error" : ""}
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        id="email"
                        placeholder="Email*"
                        name="email"
                        title="Enter your email"
                        autoComplete="off"
                        tabIndex="2"
                        onBlur={handleBlur}
                    />
                    {errors.email && touched.email && <p className='error'>{errors.email}</p>}
                    <textarea
                        className={errors.message && touched.message ? "input-error" : ""}
                        value={values.message}
                        onChange={handleChange}
                        id="message"
                        name="message"
                        placeholder="Enter Your Message*"
                        title="Your message"
                        autoComplete="off"
                        tabIndex="3"
                        onBlur={handleBlur}
                    />
                    {errors.message && touched.message && <p className='error'>{errors.message}</p>}
                    <button type="submit" disabled={isSubmitting} className="btn-yellow" title="Submit the form">Send Message<i className="fa-solid fa-arrow-up-right"></i></button>
                </form>
            </div>
        </section >
    );
}


export default Form