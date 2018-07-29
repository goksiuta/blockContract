import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './components/TopNav'
import ClientDetailsForm from './components/ClientDetails'
import ScopeWork from './components/ScopeWork'
import FeesDates from './components/FeesDates'
import SideBar from './components/SideBar'
import Modal from 'react-modal'
import ModalContent from './components/ModalContent'

class App extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal () {
    this.setState({ showModal: true });
  }

  closeModal () {
    this.setState({ showModal: false });
  }

  render() {
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}
    return (
      <div>
        <TopNav/>
        <div className="Main-container">
	        <SideBar/>
	         <div>
	          <ClientDetailsForm/>
	          <ScopeWork />
	          <FeesDates/>
	          <div className=""></div>
	         </div>
	         <div className="sidebar"></div>
         </div>
      <button onClick={this.openModal}>Trigger Modal</button>
          <Modal
           isOpen={this.state.showModal}
           style={customStyles}
        >
          <ModalContent closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default App;
