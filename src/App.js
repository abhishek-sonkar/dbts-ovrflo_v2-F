import { useState } from 'react';
import axios from 'axios';
import { Routes, Route, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Home from './components/homepage/Home';
import LogIn from './components/login/LogIn';
import SignUp from './components/signup/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import TempDashboard from './components/tempdshbrd/TempDashboard';
import PostQuestion from './components/post-ques/PostQuestion';
import Questions from './components/questions/Questions';
import Solution from './components/solution/Solution';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(undefined);
  const [userName, setUserName] = useState({ fname: "Abhishek", lname: "Sonkar" });
  const [email, setEmail] = useState("sonkar.abhishek45");

  const signupHandler = (firstName, lastName, email, password) => {
    axios.post('http://localhost:8080/user/signup', {
      firstName,
      lastName,
      email,
      password
    })
      .then(response => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          console.log("response", response.data);
          alert(response.data.message);
          navigate("/login");
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log("error", error.response.data);
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
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setLoggedIn(response.data.success);
          setUserName(response.data.username);
          localStorage.setItem('token', response.data.token);
          alert(response.data.message);
          navigate("/dashboard");
        }, 1000);
      })
      .catch(function (error) {
        if (error.response) {
          console.log(error.response.data.message);
          alert(error.response.data.message);
        }
      });
  };

  const postQuestionHandler = (title, quesBody) => {
    title = title.trim();
    quesBody = quesBody.trim();
    if (title.length !== 0 && quesBody.length !== 0) {
      axios.post('http://localhost:8080/postQuestion',
        {
          title,
          quesBody,
          postedBy: userName
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
        .then(response => {
          console.log(response.data);
          alert("Ques Posted");
        })
        .catch(function (error) {
          if (error.response) {
            alert("some error");
          }
        });
    } else {
      alert("Fields cannot be blank");
    }
  };

  const solveQuestionHandler = (ans, quesId) => {
    ans = ans.trim();
    if (ans.length !== 0) {
      axios.put(`http://localhost:8080/solveQuestion/${quesId}`,
        {
          ans,
          answeredBy: "abhi4"
        },
        {
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`
          }
        }
      )
        .then(response => {
          console.log(response.data);
          alert("Ans Posted");
        })
        .catch(function (error) {
          if (error.response) {
            console.log(error.response.data);
            alert(error.response.data.error);
          }
        });
    } else {
      alert("Cannot post empty answer");
    }
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/login" element={<LogIn loading={loading} loginHandler={loginHandler} />} />
          <Route path="/signup" element={<SignUp loading={loading} signupHandler={signupHandler} />} />
          <Route path="/dashboard" element={<Dashboard {...userName} email={email} />} />
          <Route path="/temp" element={<TempDashboard />} />
          <Route path="/post" element={<PostQuestion postQuestionHandler={postQuestionHandler} />} />
          <Route path="/ques" element={<Questions />} />
          <Route path="/solveQuestion/*" element={<Solution solveQuestionHandler={solveQuestionHandler} />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
