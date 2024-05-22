


// import React from 'react';
// import "./Procedure.css";
// import img1 from "../src/assets/Mask group.png";
// import img2 from "../src/assets/Rectangle 37.png";
// import img3 from "../src/assets/Rectangle 38.png";
// import img4 from "../src/assets/Rectangle 39.png";
// import img5 from "../src/assets/Rectangle 40.png";

// function Procedure() {
//   return (
//     <section id='procedure'>
//       <div id='smd'>
//         <div className=' d-flex flex-column justify-content-center align-items-center '>
         
//             <div className='m-2'>
//               <img src={img1} className='cardim' alt="Sign Up" />
//               <div className="overlay">
//                 <h3>Sign Up</h3>
//                 <p>Build a profile, update projects, and upload your resume</p>
//               </div>
//             </div>
//             <div className='m-2'>
//               <img src={img2} className='cardim' alt="Testing Phase" />
//               <div className="overlay">
//                 <h3>Testing Phase</h3>
//                 <p>Pass skill tests to join projects</p>
//               </div>
//             </div>
//             <div className='m-2'>
//               <img src={img3} className='cardim' alt="Browse Gigs" />
//               <div className="overlay">
//                 <h3>Browse Gigs</h3>
//                 <p>Find your skill-based project</p>
//               </div>  
//           </div>
       
//           <div className='m-2'>
//               <img src={img4} className='cardim' alt="Apply & Collaborate" />
//               <div className="overlay">
//                 <h3>Apply & Collaborate</h3>
//                 <p>Bid for projects and collaborate with our professionals</p>
//               </div>
//             </div>
//             <div className='m-2'>
//               <img src={img5} className='cardim' alt="Get Paid & Certified" />
//               <div className="overlay">
//                 <h3>Get Paid & Certified</h3>
//                 <p>Get paid and receive certification from KGGeniusLabs</p>
//               </div>
//           </div>
//             </div>        
//         </div>
    
//       <div id='lgd' >
//         <div className='d-flex justify-content-center'>
//         <div className='im'>

//         </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Procedure;



// import React from 'react';
// import "./Procedure.css";
// import img1 from "../src/assets/Mask group.png";
// import img2 from "../src/assets/Rectangle 37.png";
// import img3 from "../src/assets/Rectangle 38.png";
// import img4 from "../src/assets/Rectangle 39.png";
// import img5 from "../src/assets/Rectangle 40.png";

// function Procedure() {
//   return (
//     <section id='procedure'>
//       <div id='smd'>
//         <div className='d-flex flex-column justify-content-center align-items-center'>
//           <div className='m-2 position-relative'>
//             <img src={img1} className='cardim' alt="Sign Up" />
//             <div className="overlay">
//               <h5>Sign Up</h5>
//               <p>Build a profile, update projects, and upload your resume</p>
//             </div>
//           </div>
//           <div className='m-2 position-relative'>
//             <img src={img2} className='cardim' alt="Testing Phase" />
//             <div className="overlay">
//               <h5>Testing Phase</h5>
//               <p>Pass skill tests to join projects</p>
//             </div>
//           </div>
//           <div className='m-2 position-relative'>
//             <img src={img3} className='cardim' alt="Browse Gigs" />
//             <div className="overlay">
//               <h5>Browse Gigs</h5>
//               <p>Find your skill-based project</p>
//             </div>
//           </div>
//           <div className='m-2 position-relative'>
//             <img src={img4} className='cardim' alt="Apply & Collaborate" />
//             <div className="overlay">
//               <h5>Apply & Collaborate</h5>
//               <p>Bid for projects and collaborate with our professionals</p>
//             </div>
//           </div>
//           <div className='m-2 position-relative'>
//             <img src={img5} className='cardim' alt="Get Paid & Certified" />
//             <div className="overlay">
//               <h5>Get Paid & Certified</h5>
//               <p>Get paid and receive certification from KGGeniusLabs</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Procedure;

import React from 'react';
import "./Procedure.css";
import img1 from "../src/assets/Mask group.png";
import img2 from "../src/assets/Rectangle 37.png";
import img3 from "../src/assets/Rectangle 38.png";
import img4 from "../src/assets/imagegirl.png";
import img5 from "../src/assets/Rectangle 40.png";
import img6 from "../src/assets/Rectangle 39.png";

function Procedure() {
  return (
    <section id='procedure'>
      <div id='smd'>
       <div className='d-flex flex-wrap justify-content-center '>
          <div className='m-2  position-relative'>
            <img src={img1} className='carim img-fluid' alt="Sign Up" />
            <div className="overlay">
              <h3>Sign Up</h3>
              <p>Build a profile, update projects, and upload your resume</p>
            </div>
          </div>
          <div className='m-2 position-relative'>
            <img src={img2} className='carim img-fluid' alt="Testing Phase" />
            <div className="overlay">
              <h3>Testing Phase</h3>
              <p>Pass skill tests to join projects</p>
            </div>
          </div>
          <div className='m-2 position-relative'>
            <img src={img3} className='carim img-fluid' alt="Browse Gigs" />
            <div className="overlay">
              <h3>Browse Gigs</h3>
              <p>Find your skill-based project</p>
            </div>
          </div>
          <div className='m-2 position-relative'>
            <img src={img6} className='carim img-fluid' alt="Apply & Collaborate" />
            <div className="overlay">
              <h3>Apply & Collaborate</h3>
              <p>Bid for projects and collaborate with our professionals</p>
            </div>
          </div>
          <div className='m-2 position-relative'>
            <img src={img5} className='carim img-fluid' alt="Get Paid & Certified" />
            <div className="overlay">
              <h4>Get Paid & Certified</h4>
              <p>Get paid and receive certification from KGGeniusLabs</p>
            </div>
          </div>
        </div>
      </div>
      <div id='lgd' >
        <div className='d-flex justify-content-center'>
        <div className='im'>

       </div>
        </div>
      </div>
    </section>
  );
}

export default Procedure;
