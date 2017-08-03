import React from 'react';
import ModalTemplate from '../components/ModalTemplate';

class LoginModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      password: null
    };
  }

  render() {
    return (
      <div>
        {this.state.show?

        <ModalTemplate title="Login:" closeCtrl={}>
          
          </ModalTemplate>:
          null
        }
      </div>
    )
  }
}

export default LoginModal;