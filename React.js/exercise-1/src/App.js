import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
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

/* Los componentes se pueden crear en el mismo archivo aunque no es lo común. */

// function Card (props) {
//   return (
//       <div className="card">
//           <img className="card-img-top" src="..." alt="Card image cap"/>
//           <div className="card-body">
//               <h5 className="card-title">{props.title}</h5>
//               <p className="card-text">{props.paragraph}</p>
//               <a href={props.buttonURL} className="btn btn-primary" target="_blank">{props.buttonTXT}</a>
//           </div>
//       </div>
//   )
// }

export default App;