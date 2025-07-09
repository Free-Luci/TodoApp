
{/* <h1>Hello Sumit.</h1>; */}
// React.createElement('h1',null,"Hello Sumit.");



// export const App =() => {
//     return React.createElement('h1',null,"Hello Sumit.");
// };

const NetflixSeries = () => {
    const name = "Queen ofTears";
    const rating = "8.2";
    const summary ="Baek Hyun-woo and Hong Hae-in Navigate a tense relationship, both at home and at work.But upon deciding his future ,Hyun-woo pays a visit to his family.";
    const returnGenre =() => {
        const genre ="Hey Rone";
        return genre;
    }

    return (

<div>

    <div>

<img src="abc.jpeg" alt ="abc.jpeg"

width="40%" height="40%"/>
 
    </div>

<h2>Name: {name}</h2>

<h3> Rating: {5+3.22}</h3>

{/* <p>Summary:Baek Hyun-woo and Hong Hae-in Navigate a tense relationship, both at home and at work.But upon deciding his future ,Hyun-woo pays a visit to his family.</p> */}

<p>Summary:{summary}</p>
<p>Genre:{returnGenre()}</p>
</div>
);
} ;





  @import url("https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;700;900&family=Poppins:wght@200;300;400;600&family=Quicksand:wght@300;400;500;600;700&family=Urbanist:wght@300;400;500;600;700;800;900&display=swap");

/* base rule  */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Urbanist", sans-serif;
}

html {
  font-size: 62.5%;
  /* 1rem = 10px  */
  /* scroll-behavior: smooth; */
  /* scroll-snap-type: Y proximity; */
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Poppins", sans-serif;
}

p,
li,
a,
label {
  font-family: "Urbanist", sans-serif;
  font-size: 1.8rem;
  letter-spacing: 0.1rem;
  font-weight: 400;
  color: var(--para-color);
  line-height: 1.5;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

/* theme */

:root {
  --main-color: #0062ff;
  --supporting-color: #ebf3fe;
  --font-color: #424242;
  /* --bg-color: #ffffff; */
  --bg-color: #f7fcff;
  --heading-color: #000a19;
  --hero-heading-color: #003b99;
  --white-color: #ffffff;
  --para-color: #504e4d;
  --bnt-hover-bg-color: #003b99;
  --btn-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  --footer-bg-color: #040d12;
}

/* layout */

/* section {
  scroll-snap-align: center;
} */

.container {
  max-width: 142rem;
  margin: 0 auto;
  padding: 9.6rem 2.4rem;
}

/* .section-about .container:first-child,
.section-blog .container:first-child,
.section-course .container:first-child,
.section-contact--homepage .container:first-child,
.section-why--choose .container:first-child,
.section-contact .container:first-child {
  padding: 6.4rem 0 2.4rem 0;
} */

:is(
    .section-about,
    .section-blog,
    .section-contact,
    .section-course,
    .section-why--choose,
    .section-contact--homepage
  )
  .container:first-child {
  padding: 6.4rem 2.4rem 2.4rem 2.4rem;
}

.grid {
  display: grid;
}

.grid-two--cols {
  grid-template-columns: repeat(2, 1fr);
}

.grid-three--cols {
  grid-template-columns: repeat(3, 1fr);
}








/*base rule*/
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Urbanist", sans-serif;
  }
  
  html {
    font-size: 62.5%;
    scroll-snap-type: Y proximity;
}
   
  
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--heading-color);
    font-family: "Poppins", sans-serif;
    font-weight: 900;
  }
  h1{
    font-size: 3.2rem;
  }
  
  p,
  li,
  a,
  label {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    color: var(--para-color);
    line-height: 1.5;
    font-weight: 400;
  }
  
  a {
    text-decoration: none;
  }
  
  li {
    list-style: none;
  }
  
  /* theme */
  
  :root {
    --main-color: #0062ff;
    --supporting-color: #ebf3fe;
    --font-color: #424242;
    /* --bg-color: #ffffff; */
    --bg-color: #f7fcff;
    --heading-color: #000a19;
    --hero-heading-color: #003b99;
    --white-color: #ffffff;
    --para-color: #504e4d;
    --bnt-hover-bg-color: #003b99;
    --btn-box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    --footer-bg-color: #040d12;
  }
/*   
  section {
    scroll-snap-type:;
  } */
  
  
  
  .container {
    max-width: 142rem;
    margin: 0 auto;
    padding: 9.6rem 2.4rem;
  }
  

  

  .grid {
    display: grid;
    gap: 9.6rem;
  }
  
  .grid-two--cols {
    grid-template-columns: repeat(2, 1fr);
  }

  .grid-three--cols {
    grid-template-columns: repeat(3, 1fr);
}


