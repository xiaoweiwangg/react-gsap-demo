import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
//useRef will give us access to elements

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, [line1, line2]);

  return (
    <h1 className="page-title">
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          {lineContent}
        </div>
      </div>
      <div ref={(el) => (line2 = el)} className="line-wrap">
        <div className="line">{lineContent2}</div>
      </div>
    </h1>
  );
};

export default Title;
