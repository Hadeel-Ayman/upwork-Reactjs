import React from "react";
import { Link } from "react-router-dom";

const style = {
  color:'#108a00'
};

const Already = ({ link, desc, LinkTitle }) => {
  return (
    <>
      <p>
        {desc}
        <Link to={link} style={style}>
          {LinkTitle}
        </Link>
      </p>
    </>
  );
};

export default Already;
