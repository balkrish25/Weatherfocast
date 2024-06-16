import React, { useState } from 'react';
import Modal from 'react-modal';
import '../Styles/ModalComponent.css';

Modal.setAppElement('#root'); 

function ModalComponent({ isOpen, onRequestClose, onAddCity }) {
    const [city, setCity] = useState('');
  
    const handleAddCity = () => {
      if (city.trim()) {
        onAddCity(city);
        setCity('');
        onRequestClose();
      }
    };
  
    return (
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Add Favorite City"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Add Favorite City</h2>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleAddCity}>Add City</button>
        <button onClick={onRequestClose}>Cancel</button>
      </Modal>
    );
  }
  
  export default ModalComponent;