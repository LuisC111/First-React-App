import React from 'react';
import Typing from 'react-typing-animation';
import '../../assets/css/home.css';
import '../../assets/js/home.js';
import '../../assets/FA/css/all.min.css';
import '../../assets/css/jquery.fullPage.min.css';
import '../../assets/css/animate.css';




const Home = () => (
    <>



    <head>
      <link href='https://fonts.googleapis.com/css?family=Raleway:100,200,400,600' rel='stylesheet' type='text/css' />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="css/styles.css" />
    </head>
    <body class="hb">
      <div class="cont">

        <h1 class="bl">Luis Martinez<span class="cr"> / </span>React<span class="cr">.</span>js</h1>

  <Typing speed="80">
    <span class="bl">Student + </span><span class="cr">Developer (AND NOOBIE)</span>
    <Typing.Backspace count={13}  />
  </Typing>
  
    <h2 class="bl">
          <span class="font-weight-light d-block" data-animate="fadeInRight"><span class="ngr"><span class="typed"></span></span></span>

        </h2>


      </div>
<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


    </body>
  <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.11"></script>





    </>
)
export default Home;