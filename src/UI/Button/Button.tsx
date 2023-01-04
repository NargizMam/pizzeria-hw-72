import React, {PropsWithChildren} from 'react';
import './Button.css';


interface Props extends PropsWithChildren{
  type:  "submit" | "reset",
  clicked: React.MouseEventHandler
}

const Button: React.FC<Props> = ({type, clicked, children}) => (
  <button
    type={type ? type : 'button'}
    onClick={clicked}
    className="Button"
  >
    {children}
  </button>
)

export default Button;