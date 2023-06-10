import React, { useState } from 'react';

function Loginscreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Effettua la chiamata API per il login con username e password
    try {
      const response = await fetch('https://gdfblog.onrender.com/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      const data = await response.json();


      // Salva il token JWT nel local storage
      localStorage.setItem('token', data.token);
      console.log(data.token);

      // Reindirizza l'utente alla pagina home
      window.location.href = '/BlogGDF';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/*<!-- Page Header-->*/}
      <header class="masthead" >
        <div class="container position-relative px-4 px-lg-5">
          <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
              <div class="site-heading">
                <h1>LOGIN</h1>
                <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Loginscreen;
