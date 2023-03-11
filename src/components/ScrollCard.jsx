import React, { useRef, useEffect, useState } from 'react';
import { scrollDataLeft } from '../utils/data/data';

function ScrollCard() {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;

    let scrollTop = 0;

    const scrollInterval = setInterval(() => {
      scrollTop += 1;
      setScrollPosition(scrollTop);
      // Check if scrollTop exceeds the height of the scrollable content
    if (scrollTop >= container.scrollHeight - container.clientHeight) {
      scrollTop = 0;
    }
    }, 15);

    return () => clearInterval(scrollInterval);
  }, []);

  const scrollDataLeftRepeated = [];

  // Repeat the scrollDataLeft array 3 times
  for (let i = 0; i < 3; i++) {
    scrollDataLeftRepeated.push(...scrollDataLeft);
  }

  return (
    <div className="container" ref={containerRef}>
      <div className="column" >
        <div className="card-wrapper" style={{
          transform: `translate3d(0px, ${-scrollPosition / 80}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}>
          {scrollDataLeftRepeated.map((item) => (
            <div key={item.id} className='card'>
              <img src={item.star} alt="img" style={{width:100, marginBottom:10}}/>
              <p className='card__content'>"{item.content}"</p>
              <div  className='card__flex'>
              <img src={item.img} alt="img" />
              <div>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="column" >
        <div className="card-wrapper" style={{
          transform: `translate3d(0px, ${-scrollPosition / 60}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}>
          {scrollDataLeftRepeated.map((item) => (
            <div key={item.id} className='card'>
              <img src={item.star} alt="img" style={{width:100, marginBottom:10}} />
              <p className='card__content'>"{item.content}"</p>
              <div  className='card__flex'>
              <img src={item.img} alt="img" />
              <div>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
      <div className="column" >
        <div className="card-wrapper" style={{
          transform: `translate3d(0px, ${-scrollPosition / 40}%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}>
          {scrollDataLeftRepeated.map((item) => (
            <div key={item.id} className='card'>
              <img src={item.star} alt="img" style={{width:100, marginBottom:10}} />
              <p className='card__content'>"{item.content}"</p>
              <div className="card__flex">
              <img src={item.img} alt="img" />
              <div>
                <p>{item.name}</p>
                <p>{item.position}</p>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScrollCard;
