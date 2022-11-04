import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Dashboard from './components/Dashboard/Dashboard';
import PostQuestion from './components/PostQues/PostQuestion';

function App() {

  let navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState(undefined);

  const signupHandler = (firstName, lastName, email, password) => {
    axios.post('http://localhost:8080/user/signup', {
      firstName,
      lastName,
      email,
      password
    })
      .then(response => {
        //console.log(response.data.message);
        alert(response.data.message);
        navigate("/login");
      })
      .catch(function (error) {
        if (error.response) {
          //console.log(error.response.data.message);
          alert(error.response.data.message);
        }
      });
  };

  const loginHandler = (email, password) => {
    axios.post('http://localhost:8080/user/login', {
      email,
      password
    })
      .then(response => {
        //console.log(response.data.message);
        setLoggedIn(response.data.success);
        setUserName(response.data.username);
        localStorage.setItem('token', response.data.token);
        alert(response.data.message);
        navigate("/post");
      })
      .catch(function (error) {
        if (error.response) {
          //console.log(error.response.data.message);
          alert(error.response.data.message);
        }
      });
  };

  const postQuestionHandler = (title, quesBody) => {

    const token = "Bearer " + localStorage.getItem('token');
    console.log(token);

    axios.post('http://localhost:8080/test',
    {
      headers: {
            "Authorization" : token
          }
        }
    )
      .then(response => {
        console.log(response.data);
        alert(response.data);
      })
      .catch(function (error) {
        if (error.response) {
          console.log("error");
        }
      });

    // title = title.trim();
    // quesBody = quesBody.trim();
    // // const data = {
    // //   title,
    // //   quesBody,
    // //   postedBy: userName
    // // }
    // if (title.length !== 0 && quesBody.length !== 0) {
    //   axios.post('http://localhost:8080/postQuestion', {
    //     title, 
    //     quesBody, 
    //     postedBy: "userName"
    //   }, 
    //   // {
    //   //   headers: {
    //   //     "Authorization" : `Bearer ${localStorage.getItem('token')}`
    //   //   }
    //   // }
    // )
    // .then(response => {
    //   console.log(response.data);
    // })
    // .catch(function (error) {
    //   if (error.response) {
    //     alert("some error");
    //   }
    // });
    // } else {
    //   alert("Fields cannot be blank");
    // }
  };




  return (
    <>
      <Routes>
        <Route path="/login" element={<SignIn loginHandler={loginHandler} />} />
        <Route path="/signup" element={<SignUp signupHandler={signupHandler} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post" element={<PostQuestion postQuestionHandler={postQuestionHandler} />} />
        <Route path="*" element={<h1>Error</h1>} />
      </Routes>
    </>
  );
}

export default App;
