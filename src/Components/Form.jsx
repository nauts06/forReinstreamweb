import React ,{useEffect,useState}from "react";
import { Formik } from "formik";
import "../App.css"
//import { Autocomplete ,TextField} from "@mui/material";

const Form = () => {
  const [data,setData] = useState([])


  return (
    <>
      <h1> Product Add Form</h1>

      <Formik
        initialValues={{
          name: "",
          quantity: "",
          price: "",
          image: "",
          description: "",
          category: "",
        }}
        onSubmit={(values, actions) => {
          JSON.stringify(values, null, 2);
          actions.setSubmitting(false);
          console.log(values);
          setData([...data,values])
          // localStorage.setItem("check",JSON.stringify(values)
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <input
            className="pad"
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
              placeholder="Product Name"
            />
            <br></br>
            <input
            className="pad"
              type="number"
              placeholder="Quantity"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.quantity}
              name="quantity"
            />
            <br></br>
            <input
            className="pad"
              type="number"
              placeholder="Product Price"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.price}
              name="price"
            />
            <br></br>
            <input
            className="pad"
              type="url"
              placeholder="Enter URL"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.image}
              name="image"
            />
            <br></br>
            <input
            className="pad"
              type="text"
              placeholder="Product Description"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.description}
              name="description"
            />
            <br></br>
            <input
            className="pad"
              type="text"
              placeholder="Product Category"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.category}
              name="category"
            />
            <br></br>
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button  className="pa" type="submit">Submit</button>
          
          </form>
        )}
      </Formik>
    <div className="bar">
    {data&&data.map((e,i)=>(
      
      <div className="div">
      <h4>Product Name: {e.name}</h4>
      <h4>Product Quantity: {e.quantity}</h4>
      <h4>Product Image: {e.image}</h4>
      <h4>Product Description: {e.description}</h4>
      <h4>Product Name: {e.category}</h4>
      </div>
    
  ))}
    </div>


    


    
    </>
  );
};

export default Form;
