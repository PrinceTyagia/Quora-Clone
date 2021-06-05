import React from 'react'
import { Avatar } from "@material-ui/core";
import '../css/QuoraBox.css'
import { selectUser } from '../features/userSlice';
import { useSelector } from 'react-redux';
function QuoraBox() {
  const user = useSelector(selectUser)
    return (
      <div className="quoraBox">
        <div className="quoraBox__info">
          <Avatar className="quoraBox__info"
            src={user.photo}
          />
          <h5>{user.displayName}</h5>
        </div>
        <div className="quoraBox__quora">
          <p>What is your question or link?</p>
        </div>
      </div>
    );
}

export default QuoraBox
