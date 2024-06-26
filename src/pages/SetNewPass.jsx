import NavBar from "../components/NavBar";
import styled from "styled-components";
import img from "../../public/images/cuate.png";
import Button from "../components/Button";

function SetNewPass() {
  return (
    <Wrapper>
      <NavBar />
      <div className="container">
        <div className="left">
          <h1 className="newpass"> New password </h1>
          <p className="writepass">Please write your new password</p>
          
          <label  htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" className="input-field" />

          <label className="label" htmlFor="confirm-password">Confirm Password</label>
          <input type="password" id="confirm-password" className="input-field" />

          <Button size="medium" className="but">
            Confirm Password
          </Button>
        </div>
        <div className="right">
          <img className="img" src={img} alt="Business" />
        </div>
      </div>
    </Wrapper>
  );
}

export default SetNewPass;

const Wrapper = styled.div`
  height: 100vh;
  background: #fef9f0;
  align-items: center;
  justify-content: center;
  overflow: hidden; 


  .container {
    display: flex;
    margin-top: 80px;
  }
  .left {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 65px;
    gap: 10px;
  }

  .newpass {
    font-family: Literata;
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 4px;
    text-align: left;
    color: var(--text, #00000099);
    padding-top: 30px;
  }

  .writepass {
    font-family: Literata;
    font-size: 25px;
    font-weight: 300;
    letter-spacing: 0.60px;
    text-align: left;
    color: #000000bf;
    padding-bottom: 20px;
  }

  label {
    display: block;
    text-transform: capitalize;
    font-family: Literata;
    font-size: 20px;
    font-weight: 300;
    color: #312f2fbe;
    margin: 0;
  
  }

  .input-field {
    background-color: transparent;
    height: 20px;
    margin: 0;
    padding: 5px 0;
    font-size: 17px;
    font-family: Literata;
    border: none;
    outline: none;
    position: relative;
    border-bottom: 1.5px solid #00000099;
    width: 80%;
    -webkit-text-security: disc;
  }

  Button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 2.8125rem;
    width:80%;
   margin-top:30px;
    
  }
  .but {
    color: var(--white, #fff);
    font-family: Literata;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.375rem;
    letter-spacing: 0.0625rem;
    padding-left: 30px;
  }

  .right {
    width: 50%;
    display: flex;
    justify-content: center;
  }

  .img {
    height: 70%;
    width: auto;
  }
`;
