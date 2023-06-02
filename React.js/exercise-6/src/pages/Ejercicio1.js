import Card from '../components/Card';

export default function Ejercicio1() {
  return (
    <div className="container">
      <h1>Exercise 1</h1>

      <Card 
      imgURL="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" 
      title="Card title" 
      paragraph="Some quick example text to build on the card title and make up the bulk of the card's content." 
      buttonURL="https://react-bootstrap.github.io/getting-started/introduction/" 
      buttonTXT="Go somewhere"
      />

      <Card 
      imgURL="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" 
      title="Title 2" 
      paragraph="lorem*6" 
      buttonURL="https://react-bootstrap.github.io/getting-started/introduction/" 
      buttonTXT="Click Me!"
      />

    </div>
  );
}