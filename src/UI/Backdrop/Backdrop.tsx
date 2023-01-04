import React from 'react';
import './Backdrop.csx';

interface Props {
  show: boolean,
  clicked: React.MouseEventHandler
}

const Backdrop: React.FC<Props> = ({show, clicked}) => {
  return show ? <div className="Backdrop" onClick={clicked} /> : null;
};

export default Backdrop;