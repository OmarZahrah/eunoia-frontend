
import logo from "../../public/images/png-wordmark-1.png"
import styled from "styled-components"
import Button from "../components/Button"
import image1 from "../../public/images/unsplash-ebv-cs-rypmx-m.png"
import image2 from "../../public/images/unsplash-fn-0-xxl-9-szc-u.png"
import image3 from "../../public/images/unsplash-azod-v-2-d-0-g-lc.png"
import group from "../../public/group-26.svg"
const Welcome = () => {
  return(
    <Wrapper>
  <div className="container">
    <nav>
    <img className="Hlogo"src={logo}/>
    <div className="buttons">
    <Button
    className="logbutton"
    color="pink"
    background="transparent"
    size="small"
    
    >
      Login
      </Button>

    <Button className="regbutton"
    
    color="white"
    background="pink"
    size="small">
    Register
      </Button>
      </div>
    </nav>
<div className="images">
<img src={image1}/>
<img src={image2}/>
<img src={image3}/>

</div>

<div className="text">
 <p className="h">Your Event, Perfected Here.</p>

 <p>Empower your event dreams with our
   comprehensive platform, your ultimate guide
   to seamless and unforgettable gatherings.</p>
</div>




  </div>
  </Wrapper>
  )
};
export default Welcome;

const Wrapper=styled.div`
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1rem 8rem ;
    
  }

  .Hlogo {
    width: 9.3rem;
    height: 2.2rem;
    flex-shrink: 0;
  }
  
  .buttons{
    margin-right:1.2rem;    
  }

  .logbutton {
    margin-right:0rem;
    font-size:1.5rem;
  }

  .regbutton {
  font-size: 1.3rem;
  letter-spacing: 0.0625rem; 
  text-indent: -0.25rem; 
  width: 9.375rem; 
  height: 3.125rem;
  flex-shrink: 0;


  }

.container{
  background: linear-gradient(to top, #FEF9F0 55%,#fff 45%);
  height:100vh ;
  margin-top:1.8rem;
  
 
}
.images {
    display: flex;
    justify-content: space-between; 
    margin: 1.125rem 7.5rem 1.25rem;
    
  }
  .images img {
   width:24rem;
   height: auto;
   padding: 17px;

  };
  
  .h {
  color: var(--text, rgba(0, 0, 0, 0.60));
  text-align: center;
  font-size: 2.8125rem; 
  font-family: 'literata', serif;
  font-style: "Lucida Console", "Courier New", monospace;
  font-weight: 400;
  font-optical-sizing: auto;
  font-style: italic;
  line-height: normal;
  letter-spacing: 0.0625rem; 
  width: 50%;
  margin: 0 auto;
}


p {
  color: var(--text, rgba(0, 0, 0, 0.60));
  text-align: center;
  font-size: 1.36rem; 
  font-weight: 300;
  letter-spacing: 0.0625rem; 
  width: 46.875rem; 
  margin: 9px 0 0 21.25rem;
}

  

`

import styled from "styled-components";

const Welcome = () => {
  return <Wrapper>Welcome</Wrapper>;
};
export default Welcome;

const Wrapper = styled.div``;