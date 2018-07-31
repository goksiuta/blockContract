import React, { Component } from 'react';
import logo from './logo.svg';
import TopNav from './components/TopNav'
import ClientDetailsForm from './components/ClientDetails'
import ScopeWork from './components/ScopeWork'
import FeesDates from './components/FeesDates'
import SideBar from './components/SideBar'
import Modal from 'react-modal'
import ModalContent from './components/ModalContent'
import Web3 from 'web3'
const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");

class App extends Component {

  state = {
    showModal: false
  };


  openModal = () => {
    this.setState({ showModal: true })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  openMetaMask = (e) => {
    e.preventDefault()
    web3.eth.sendTransaction({
    from: '0x23571754544cc1a95d269b8d75baff4c17a8b223',
    to: '0xC8a013451768a24177926f6E27f938909A2C493E',
    value: '12453400000000000000'
    })
  }

  render() {

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
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
            <div className="call-to-action">
	            <div className="primary-btn" onClick={this.openModal} ><a>Create contract</a></div>
            </div>
	         </div>
	         <div className="sidebar"></div>
         </div>

          <Modal
           isOpen={this.state.showModal}
           className="Modal"
           overlayClassName="Overlay"
           style={customStyles}
        >
          <ModalContent closeModal={this.closeModal}/>
        </Modal>
      </div>
    );
  }
}

export default App;
