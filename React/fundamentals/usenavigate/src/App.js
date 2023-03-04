import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

const Survey = (props) => {

  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const sendSurvery = (e) => {
    e.preventDefault();

    navigate("/results");
  }

  return(
    <form onSubmit={ sendSurvery }>
      <label>Your Name:</label>
      <input type={"text"} onChange={ (e) => setName(e.target.value) } value={name}></input>

      <label>Your Comment:</label>
      <textarea onChange={ e => setComment(e.target.value) } value={comment}></textarea>

      <input type={"submit"} value="Submit Survey"></input>

    </form>
  )
}

export default Survey;