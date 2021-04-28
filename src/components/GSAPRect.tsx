import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";

interface RectProps {
  y: any;
  height: any;
  width: any;
  duration: number;
  ease: string;
}

const GSAPRect = (props: RectProps) => {
  let rectEl: any = useRef();
  let [attributes, setAttributes] = useState({ ...props });

  useEffect(() => {
    gsap.to(rectEl, {
      duration: props.duration,
      attr: { y: props.y, height: props.height, width: props.width },
      ease: props.ease
    });
  }, [props.y, props.height, props.width, props.duration, props.ease]);

  return (
    <rect
      ref={(el) => (rectEl = el)}
      y={attributes.y}
      height={attributes.height}
      width={attributes.width}
    ></rect>
  );
};

export default GSAPRect;
