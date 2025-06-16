import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const regions = [
    {
      name: "Andina",
      description: "Danzas tradicionales de la región andina de Bolivia, como la Morenada, Diablada y Caporales."
    },
    {
      name: "Valles",
      description: "Bailes típicos de los valles bolivianos, incluyendo el Tinku y el Pujllay."
    },
    {
      name: "Oriente",
      description: "Danzas de la región oriental, como el Taquirari y el Carnavalito."
    },
    {
      name: "Chaco",
      description: "Expresiones dancísticas del Chaco boliviano, con influencias indígenas y criollas."
    },
    {
      name: "Amazonía",
      description: "Bailes tradicionales de la Amazonía boliviana, con movimientos que imitan animales y naturaleza."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {regions.map((region, index) => (
        <div key={index} className="accordion-item">
          <div 
            className="accordion-header" 
            onClick={() => toggleAccordion(index)}
          >
            {region.name}
          </div>
          <div 
            className={`accordion-content ${activeIndex === index ? 'show' : ''}`}
          >
            {region.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;