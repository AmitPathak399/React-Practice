import './App.css';
import Header from './Components/Header';
import Movies from './Components/Movies';
import movies from './movies.json'
function App() {
  return (
    <div className="App">
      <Header />
      <div className='main'>
        {
          movies.map((element)=>(
            <Movies 
            title={element.Title}
            year={element.Year}
            img={element.Poster}/>
          ))
        } 
      </div>
    </div>


  );
}

export default App;
