import React from 'react'
import './contacts.css'
import { MdOutlineEmail } from 'react-icons/md'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref, push } from 'firebase/database'


const firebaseConfig = {
  apiKey: "AIzaSyCiAKLGgo0oMHbEEQLDU5Cf3jHTZC4Q3qI",
  authDomain: "portfolio-8ce81.firebaseapp.com",
  databaseURL: "https://portfolio-8ce81-default-rtdb.firebaseio.com",
  projectId: "portfolio-8ce81",
  storageBucket: "portfolio-8ce81.appspot.com",
  messagingSenderId: "237684583949",
  appId: "1:237684583949:web:4a2d99fd4466b11670ef44",
  measurementId: "G-Z5BW8KKGW1"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


const Contacts = () => {
  const initialValues = { name: '', email: '', message: '' }
  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    message: Yup.string().required('Required')
  })

 const onSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    console.log('Preparing to submit form data...');
    const newSubmission = {
      ...values,
      timestamp: new Date().toISOString()
    }
    console.log('New submission object:', newSubmission);

    const submissionRef = ref(database, 'submissions');
    console.log('Database reference created');

    const result = await push(submissionRef, newSubmission);
    console.log('Push operation completed. Result:', result);

    console.log('Form submitted successfully');
    alert('Form submitted successfully!')
    resetForm()
  } catch (error) {
    console.error('Error submitting form:', error);
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    alert('An error occurred while submitting the form. Please try again.')
  } finally {
    setSubmitting(false)
  }
}

  return (
    <section id='contacts'>
      <h5>Get in touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>ganeshaofficial01@gmail.com</h5>
            <a href="mailto:ganeshaofficial01@gmail.com">Send a message</a>
          </article>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div>
                <Field type="text" name="name" placeholder="Your Full Name" />
                <ErrorMessage name="name" component="div" className="error" />
              </div>
              <div>
                <Field type="email" name="email" placeholder="Your Email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <Field as="textarea" name="message" rows="7" placeholder="Your Message" />
                <ErrorMessage name="message" component="div" className="error" />
              </div>
              <button type="submit" className='btn btn-primary' disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  )
}

export default Contacts