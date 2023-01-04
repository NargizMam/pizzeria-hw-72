import React from 'react';
import './Modal.css';
import Backdrop from "../Backdrop/Backdrop";


interface Props extends React.PropsWithChildren{
    show: boolean,
    closed: React.MouseEventHandler
}

const Modal: React.FC<Props> = ({show, closed, children}) => {
  return (
    <>
      <Backdrop show={show} clicked={closed}/>
      <div
        className="Modal"
        style={{
          transform: show ? 'translateX(0)' : 'translateX(-100vh)',
          opacity: show ? '1' : '0',
        }}
      >
        {children}
      </div>
    </>
  );
};

export default Modal;