import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

const onSubmit= values =>{
    console.log(values)
}

// const validate = values =>{
//   let errors = {};
//   if(!values.firstname){
//     errors.firstname = 'First Name is required';
//   }
//   if(!values.lastname){
//     errors.lastname = 'Last Name is required';
//   }
//   if(!values.email){
//     errors.email = 'Email is required';
//   }
//   if(!values.password){
//     errors.password = 'Password is very important';
//   }
//   console.log(errors)
//   return errors;
// }

const validationSchema = Yup.object({
  firstname: Yup.string().required('Required'),
  lastname: Yup.string().required('Required'),
  email: Yup.string().required('Required'),
  password: Yup.string().required('Required')
})


function App() {

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  
  })
  
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit} >
        <img src='' alt="" /> <br />
         <label>FirstName:</label> <br />
         <input type="text" 
         name="firstname" 
         {...formik.getFieldProps('firstname')}
          /> <br />
          {<code>{ formik.touched.firstname && formik.errors.firstname}</code>} <br />
         <label>LastName:</label> <br />
         <input type="text" 
         name='lastname'
        {...formik.getFieldProps('lastname')}
          /><br />
         {<code>{formik.touched.lastname && formik.errors.lastname}</code>}<br />
         <label>Email:</label> <br />
         <input type="text"
          name='email'
         {...formik.getFieldProps('email')}
          /> <br />
          {<code>{formik.touched.email && formik.errors.email}</code>} <br />
         <label htmlFor="password">Password:</label>
         <input type="text"
          name='password'
         {...formik.getFieldProps('password')}
           />
           {<code>{ formik.touched.password && formik.errors.password}</code>} <br />
         <button type='submit' >Submit</button>
      </form>
    {/* </Form> */}
    </>
  )
}

export default App
