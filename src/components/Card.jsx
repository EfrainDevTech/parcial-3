import { useState } from 'react';
import Modal from './Modal';

const Card = ({ dance, image, description, price }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="card">
        <img 
          src={image} 
          alt={dance} 
          className="card-image" 
        />
        <div className="card-content">
          <h3 className="card-title">{dance}</h3>
          <p className="card-text">{description}</p>
          <button 
            className="card-button"
            onClick={() => setIsModalOpen(true)}
          >
            Ver Precio
          </button>
        </div>
      </div>

      {isModalOpen && (
        <Modal 
          title={dance} 
          onClose={() => setIsModalOpen(false)}
        >
          <p>Precio del curso: {price}</p>
        </Modal>
      )}
    </>
  );
};

export default Card;