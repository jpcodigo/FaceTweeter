import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

function NewPost() {
  return (
    <div className='newPostContainer'>
      <Formik initialValues={} onSubmit={} validationSchema={}>
        <Form>
          <label>Title:</label>
          <Field id='inputNewPost' name='title' placeholder='Post title' />
          <label>Post:</label>
          <Field id='inputNewPost' name='postText' placeholder='Post text' />
          <label>Username:</label>
          <Field id='inputNewPost' name='username' placeholder='Username' />
          <button type="submit">Create Post</button>
        </Form>
      </Formik>
    </div>
  )
}

export default NewPost