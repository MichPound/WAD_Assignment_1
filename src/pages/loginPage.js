import React, { useRef, useState } from "react";
import { useAuth } from '../contexts/authContext'
import {Alert} from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

export default function Login(){
  const emailRef = useRef()
  const passwordRef = useRef()
   const {login} = useAuth()
   const [error, setError] = useState('')
   const [loading, setLoading] = useState(false)//to stop button being pushed multiple times
   const history = useHistory()

   async function handleSubmit(e){
     e.preventDefault()

    try{
      setError('')
      setLoading(true)
     await login(emailRef.current.value, passwordRef.current.value)
     history.push('/')
    }catch{
      setError('Failed to sign in')
    }
    setLoading(false)
   }


  return (
    <>
      <form className="form bg-dark text-light" onSubmit={handleSubmit}>
        
       <h3 class = "ui header">
         Log In
       </h3> 
      
      <div className="form-group">
      <input className="form-control" type="email" placeholder="Email" name="email" ref={emailRef} autoFocus required />
      {/* <input className="form-control" type="email" placeholder="Email" name="email" autoFocus required /> */}
      </div>
      <div className="form-group">
      <input className="form-control" type="password" placeholder="Password" name="password" ref={passwordRef} required />
      {/* <input className="form-control" type="password" placeholder="Password" name="password" required /> */}
      </div>

      {error && <Alert variant="danger">{error}</Alert>}
       
      <button disabled={loading} type="submit" className="btn btn-primary">
       Log In
      </button>
      
      
     </form>
     
    <div>
      Don't have an account? <Link to = "/signup"> Sign Up </Link>
    </div>
    
    </>
  )
}




// import React, {useContext } from "react";
// // import "./reviewForm.css";
// import useForm from "react-hook-form";
// // import {MoviesContext} from '../../contexts/moviesContext'
// import { withRouter } from "react-router-dom";
// import "./forms.css";


// const LoginPage = () => {
//     const { register, handleSubmit, errors, reset } = useForm();
//     // const context = useContext(MoviesContext);

//     // const onSubmit = data => {
//     //     context.addReview(movie, data)
//     //     history.push("/movies/favorites");
//     //   };

//     return (
//       <form className="form bg-dark text-light" >
//         <h3 class = "ui header">
//           Log In
//         </h3> 

//         <div className="form-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="User Name"
//           //   defaultValue={movie.review ? movie.review.author : ""}
//             name="username"
//             ref={register({ required: "Full Name required" })}
//           />
//         </div>
//         {errors.username && <p className=" text-white">{errors.username.message} </p>}
  
//         <div className="form-group">
//         <input
//             type="text"
//             className="form-control"
//             placeholder="Password"
//           //   defaultValue={movie.review ? movie.review.author : ""}
//             name="password"
//             ref={register({ required: "Password required" })}
//           />
//         </div>
//         {errors.password && <p className=" text-white">{errors.password.message} </p>}
  
//         <button type="submit" className="btn btn-primary">
//           Submit
//         </button>
        
//       </form>
//     );
// };

// export default LoginPage;