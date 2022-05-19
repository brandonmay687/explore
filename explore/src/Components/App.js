import React, { useState } from 'react';

import AnimatedTitle from './AnimatedTitle';
import Modal from './Modal';

import plus from '../Images/Plus.svg';
import facebook from '../Images/Facebook.svg';
import instagram from '../Images/Instagram.svg';

import '../Styles/App.css';

function App() {
  const [ modal, setModal ] = useState({ show: false });

    const showModal = () => {
        setModal({ show: true });
    };

    const hideModal = () => {
        setModal({ show: false });
    };

    const handleHide = modal.show ? 'wrap hide' : 'wrap show';
    
  return (
    <div className="App">
      <div className = 'left-color'>
        <Modal modal = { modal } hideModal = { hideModal } />
        <div className = { handleHide }>
          <h1 className = 'title'>{ <AnimatedTitle /> }</h1>
          <div className = 'container'>
            <img className = 'open' src = { plus } alt = 'plus sign' onClick = { showModal }/>
            <h1>More Details</h1>
          </div>
        </div>
      </div>
      <div className = 'social'>
        <a className = 'facebook' href = '#'><img src = { facebook } alt = 'facebook logo' /></a>
        <a className = 'instagram' href = '#'><img src = { instagram } alt = 'instagram logo' /></a>
      </div>
    </div>
  );
}

export default App;
