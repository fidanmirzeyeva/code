import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Add.scss'
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Add() {
    async function addProducts(val) {
        const res = await fetch("http://localhost:5000/final",{
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(val)
        })
        const data = await res.json()
        return data
    
        
      }
  return (
    <>
     <HelmetProvider>
      <Helmet>
        <title>Add Page</title> 
      </Helmet>
  </HelmetProvider>
    <div className="formik"> <Formik
       initialValues={{ name: '', image: '', price: '' ,category: '',description:'',image2:''}}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         image: Yup.string()
           .required('Required'),
           image2: Yup.string()
           .required('Required'),
           category: Yup.string()
           .required('Required'),
           description: Yup.string()
           .required('Required'),
         price: Yup.string().required('Required'),
       })}
       onSubmit={(values) => {
         setTimeout(() => {
         addProducts(values)
         }, 400);
       }}
     >
       <Form>
         <label htmlFor="name"> Name</label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
 
         <label htmlFor="category"> Category</label>
         <Field name="category" type="text" />
         <ErrorMessage name="category" />

         <label htmlFor="description"> Description</label>
         <Field name="description" type="text" />
         <ErrorMessage name="description" />

         <label htmlFor="image">Image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />

          <label htmlFor="image2">Image2</label>
          <Field name="image2" type="text" />
          <ErrorMessage name="image2" />
 
         <label htmlFor="price">Price </label>
         <Field name="price" type="number" />
         <ErrorMessage name="price" />
 
         <button type="submit" className='add'>Add</button>
       </Form>
     </Formik></div>
    </>
  )
}

export default Add