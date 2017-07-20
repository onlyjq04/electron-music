import React from 'react';

function PopupInput(props) {
  return (
    <div>
      <div>
        <h4>
          {props.title}
        </h4>
      </div>
      <input type="text" placeholder={props.placeholder} />
      <button type="submit">Submit!</button>
    </div>
  );
}
export default PopupInput;
