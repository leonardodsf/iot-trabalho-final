import { TiWarning } from 'react-icons/ti';
import { RiShieldCheckFill } from 'react-icons/ri';

import './style.css';

function MessageCard({ message, isProtect }){
  return(
    <div className="message-card__div">
      <div className="card-content__div">
        <div className="content-icon__div">
          {
            isProtect ? <RiShieldCheckFill className="protected" /> : <TiWarning />
          }
        </div>
        <span className="text__span">{message}</span>
      </div>
    </div>
  );
}

export default MessageCard;