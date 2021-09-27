import React from 'react';
import { FaDog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BreedButton(props) {
  return (
    <Link to={`/dog/${props.item}`}>
      <button key={props.index} className="button-breed">
        <FaDog className="icon" />
        {props.item}
      </button>
    </Link>
  );
}

export default BreedButton;
