import React, { useState } from 'react';
import './ModalLogin.css'; // optional: put styles here

const SignIn = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{
    backgroundImage: "url('/img/ad.jpg')",
    backgroundSize: 'cover',
    height: '100vh',
    width: '100vw',
  }}
>

      <button onClick={() => setShowModal(true)}>Login</button>

      {showModal && (
        <div className="modal">
          <form className="modal-content" onSubmit={(e) => e.preventDefault()}>
            <div className="imgcontainer">
              <span onClick={() => setShowModal(false)} className="close" title="Close Modal">&times;</span>
              <img src={`../img/avatar.jpg`} alt="Avatar" className="avatar" />
            </div>

            <div className="container">
              <label htmlFor="uname" style={{color:'black'}}><b>Username</b></label>
              <input type="text" placeholder="Enter Username" name="uname" required />

              <label htmlFor="psw"style={{color:'black'}}><b>Password</b></label>
              <input type="password" placeholder="Enter Password" name="psw" required />
                
              <button type="submit">Login</button>
            </div>

            <div className="container footer">
              <button type="button"  onClick={() => setShowModal(false)} className="cancelbtn">Cancel</button>
              <span style={{fontSize:'15px'}} className="psw">Forgot <a href="#">password?</a></span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default SignIn;
