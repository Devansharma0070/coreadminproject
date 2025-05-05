import  { useEffect, useState } from "react";
import { FloatLabel } from "primereact/floatlabel";
import { Button } from "primereact/button";
import { Password } from "primereact/password";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import "primereact/resources/primereact.min.css";
export default function Login() {
  const navigate = useNavigate();

  const [userName, setUserName] = useState<string>("");
  const [val, update] = useState('');
  const [captchaValue, setCaptchaValue] = useState('');
  const [captchaChallenge, setCaptchaChallenge] = useState('');
  const [captchaError, setCaptchaError] = useState('');

  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaChallenge(captcha);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleLogin = () => {
    const validUsername = "Devansh";
    const validPassword = "password123";

    if (userName === validUsername && val === validPassword) {
      if (captchaValue === captchaChallenge) {
        navigate('/welcome');
      } else {
        setCaptchaError('Incorrect CAPTCHA, please try again.');
      }
    } else {
      setCaptchaError('Invalid username or password.');
      alert('Invalid username or password. Please try again.');
    }
  };

  return (
    <div className='background'>
      <div>
        <header>
          <b>
        
          </b>
        </header>

        <div className="App">
          <h1 style={{ fontFamily: "serif" }}>Welcome to CoreAdmin Portal</h1>
        </div>

        <div className="login-container">
          <h2 id='lblLogin' className='mb-8'>Login Here</h2>
          <form>
            <FloatLabel>
              <img id='logo' src='src/Images/logo.png' />
              <InputText autoComplete="off"
              tooltip="Enter your username" tooltipOptions={{ position: 'mouse' }}
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="username"
              />
              <label htmlFor="username"></label>
              <br /><br />
              <br></br>
              <br></br>

              <Password id='password'
               tooltip="Enter your Password" tooltipOptions={{ position: 'mouse' }}
                placeholder="Enter password"
                value={val}
                onChange={(e) => update(e.target.value)}
                toggleMask
              />
            </FloatLabel>
            <br /><br />
            <br></br>

            <div>
              <InputText id='cap' autoComplete="off" 
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                placeholder="Enter the text as shown in image"
              />

              <div id='capbox' style={{
                border: '1px solid black',
                padding: '11px',
                textAlign: 'left',
                fontSize: '20px',
                fontWeight: 'bold',
                letterSpacing: '5px',
                width: 'fit-content',
                margin: 'auto',
              }}>
                {captchaChallenge}
              </div>
              <Button id='refreshbutton'
                label="Refresh"
                icon="pi pi-refresh"
                className="p-button-sm p-button-outlined ml-2"
                onClick={generateCaptcha}
                style={{marginTop:55,marginLeft:90}}
              />
              <br />

              {captchaError && <p style={{ color: 'red' }}>{captchaError}</p>}
            </div>
            <Button style={{ color: "white", backgroundColor: "#0c53f7" }} type='button'
              label="Secure Login"
              raised id='button'
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
              disabled={!captchaValue || !userName || !val} >
            </Button>

            <div id='link'>Forgot Password? <a href="#">click here</a> to reset.</div>
            <b> <footer>Copyright &copy; 2025. All Rights Reserved.</footer></b>

          </form>
        </div>
      </div>  
    </div>
  )
}
