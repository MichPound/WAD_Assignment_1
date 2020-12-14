import React, {useContext } from "react";
// import "./reviewForm.css";
import useForm from "react-hook-form";
// import {MoviesContext} from '../../contexts/moviesContext'
import { withRouter } from "react-router-dom";

const RegisterForm = () => {
    const { register, handleSubmit, errors, reset } = useForm();
    // const context = useContext(MoviesContext);

    // const onSubmit = data => {
    //     context.addReview(movie, data)
    //     history.push("/movies/favorites");
    //   };

   return (
    <form className="form bg-dark text-light" >
      <h3 class = "ui header">
        Register
      </h3> 
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Author"
        //   defaultValue={movie.review ? movie.review.author : ""}
          name="author"
          ref={register({ required: "Author name required" })}
        />
      </div>
      {errors.author && <p className=" text-white">{errors.author.message} </p>}
      <div className="form-group">
        
      </div>
      {errors.content && (
        <p className="text-white">{errors.content.message} </p>
      )}

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;