import React, { useState } from 'react';
import './ModalLogin.css';
import users from './Users.json'; // Make sure path is correct

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidUser = users.some(
      (user) => user.username === username && user.password === password
    );

    if (isValidUser) {
      alert('Login successful!');
      setShowModal(false);
      // You could redirect here or trigger another state
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div
      style={{
        backgroundImage: "url('../img/ad.jpg')",
        backgroundSize: 'cover',
        height: '100vh',
        width: '100vw',
      }}
    >
      <button style={{}}onClick={() => setShowModal(true)}>Login</button>

      {showModal && (
        <div className="modal">
          <form className="modal-content" onSubmit={handleLogin}>
            <div className="imgcontainer">
              <span
                onClick={() => setShowModal(false)}
                className="close"
                title="Close Modal"
              >
                &times;
              </span>
              <img src="../img/avatar.jpg" alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname"><b>Username</b></label>
              <input
                type="text"
                placeholder="Enter Username"
                name="uname"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />

              <label htmlFor="psw"><b>Password</b></label>
              <input
                type="password"
                placeholder="Enter Password"
                name="psw"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button type="submit">Login</button>
            </div>

            <div className="container footer">
              <button type="button" onClick={() => setShowModal(false)} className="cancelbtn">
                Cancel
              </button>
              <span style={{fontSize:'20px'}} className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
