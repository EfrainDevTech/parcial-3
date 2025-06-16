import Card from '../components/Card';

const Courses = () => {
  const courses = [
    {
      dance: "Saya Afroboliviana",
      image: "https://www.minculturas.gob.bo/wp-content/uploads/2024/06/449460408_871972624964155_1750829581398545972_n-650x433.jpg",
      description: "Aprende los movimientos tradicionales de la Saya, expresión cultural de la comunidad afroboliviana.",
      price: "Bs. 250 por mes"
    },
    {
      dance: "Tinku",
      image: "https://www.lostiempos.com/sites/default/files/styles/noticia_detalle/public/media_imagen/2025/2/11/tinkus_11.jpg?itok=h-Blq3ZN",
      description: "Curso intensivo de Tinku, danza guerrera originaria del norte de Potosí.",
      price: "Bs. 300 por mes"
    },
    {
      dance: "Caporales",
      image: "https://i.imgur.com/M7n34Gt.jpg",
      description: "Domina los pasos de los Caporales, una de las danzas más populares de Bolivia.",
      price: "Bs. 350 por mes"
    }
  ];

  return (
    <div>
      <h2>Oferta de Cursos</h2>
      <p>Nuestros cursos disponibles:</p>
      <div className="cards-container">
        {courses.map((course, index) => (
          <Card 
            key={index}
            dance={course.dance}
            image={course.image}
            description={course.description}
            price={course.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;