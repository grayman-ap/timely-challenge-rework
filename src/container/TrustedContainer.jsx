import React from "react";
import Trusted from "../components/Trusted";
import ScrollCard from "../components/ScrollCard";

function TrustedContainer() {
  return (
    <div className="TrustedContainer">
      <div className="trustContainer">
        <Trusted />
      </div>
      <div className="scrollContainer">
        <ScrollCard />
      </div>
    </div>
  );
}

export default TrustedContainer;


// import React, { useRef, useEffect, useState } from 'react';
// import { scrollDataLeft } from '../utils/data/data';

// function ScrollCard() {
//   const containerRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const container = containerRef.current;

//     let scrollTop = 0;

//     const scrollInterval = setInterval(() => {
//       scrollTop += 1;
//       setScrollPosition(scrollTop);
//     }, 4);

//     return () => clearInterval(scrollInterval);
//   }, []);

//   return (
//     <div className="container" ref={containerRef}>
//       <div className="column">
//         <div className="card-wrapper"  style={{
//                 transform: `translate3d(0px, ${-scrollPosition / 40}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
//                 transformStyle: 'preserve-3d',
//                 willChange: 'transform',
//               }}>
//           {scrollDataLeft.map((item)=>(
//             <div
//               key={item.id}
//               className='card'
             
//             >
//               <p>{item.content}</p>
//               <img src={item.img} alt="img" />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ScrollCard;
