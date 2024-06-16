import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import '../Styles/FavoritesComponent.css';

function FavoritesComponent({ favorites, onSelectCity, onAddFavorite, onRemoveFavorite }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    const handleAddFavorite = (city) => {
      onAddFavorite(city);
    };

    return (
        <div className="favorites-component">
          <h3>Favorite Cities</h3>
          <button onClick={handleOpenModal}>Add Favorite City</button>
          <ul>
            {favorites.map((city) => (
              <li key={city.id}>
                {city.name}
                <div>
                  <button onClick={() => onSelectCity(city.name)}>Show Weather</button>
                  <button onClick={() => onRemoveFavorite(city.id)}>Remove</button>
                </div>
              </li>
            ))}
          </ul>
          <ModalComponent
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            onAddCity={handleAddFavorite}
          />
        </div>
      );
    }
    
    export default FavoritesComponent;
