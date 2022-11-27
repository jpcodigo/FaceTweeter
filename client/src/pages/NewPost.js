import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function NewPost() {
  const initialValues = {
    title: '',
    postText: '',
    username: '',
  }

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('Title is a required field'),
    postText: Yup.string().required('Post text is a required field'),
    username: Yup.string().min(3, 'Username must be more than 3 characters').max(15, 'Username cannot be more than 15 characters').required('Username is a required field'),
  })

  const onSubmit = (data) => {
    axios.post('http://localhost:8080/posts', data).then(response => {
      console.log('Post created');
    });
  }
  return (
    <div className='newPostContainer'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        <Form className='formContainer'>
          <label>Title:</label>
          <ErrorMessage name='title' component='span'></ErrorMessage>
          <Field autoComplete='off' id='inputNewPost' name='title' placeholder='Post title' />
          <label>Post:</label>
          <ErrorMessage name='postText' component='span'></ErrorMessage>
          <Field autoComplete='off' id='inputNewPost' name='postText' placeholder='Post text' />
          <label>Username:</label>
          <ErrorMessage name='username' component='span'></ErrorMessage>
          <Field autoComplete='off' id='inputNewPost' name='username' placeholder='Username' />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default NewPost