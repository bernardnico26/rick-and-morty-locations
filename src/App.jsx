import './App.css'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Location from  './components/Location'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true);
  const[Locations, setLocation]= useState({})
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("");


  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126 + 1);
    const apiUrl = `https://rickandmortyapi.com/api/location/${randomId}`

    setTimeout(() => {
    axios
      .get(apiUrl)
      .then((resp) => {
        setLocation(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      })
    },7000);

  }, []);

  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/location/?name=${selectedLocation}`;
  
    axios
      .get(apiUrl)
      .then((resp) => {
        setSuggestions(resp.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [selectedLocation]);  

  const searcher = (e) => {
    e.preventDefault();
  
    const selectedLocationData = suggestions.find(
      (location) => location.name === selectedLocation
    );
  
    if (selectedLocationData) {
      const apiUrl = `https://rickandmortyapi.com/api/location/${selectedLocationData.id}`;
  
      axios
        .get(apiUrl)
        .then((resp) => {
          setLocation(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  };  

    const [ActualPage, setActualPage] = useState(1);
  const residentsPerPage = 16;

  const lastIndex = residentsPerPage * ActualPage;
  const firstIndex = lastIndex - residentsPerPage;

  const residentspaged = Locations.residents?.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(Locations.residents?.length / residentsPerPage);

  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {loading && <Loader/>}
      {!loading && (
        <>
          <header>
              <div className='banner'>
                <img src="https://i.pinimg.com/originals/ef/08/49/ef0849241e4acafebdb1c545f0bd332d.gif" alt="logobanner" className='logobanner'/>
              </div>
          </header>
          <nav>
            <section className='navsection'>
            <form onSubmit={searcher} className='searcher'>
              <input
                type="text"
                placeholder="Type a location name ..."
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className='tipeador'
                list="locationSuggestions"
              />
              <datalist id="locationSuggestions" className='suggerences'>
                {suggestions.map((location) => (
                  <option key={location.id} value={location.name} />
                ))}
              </datalist>
              <button type="submit" className='searchbutton'>
                <i className='bx bx-search-alt lupita'></i>
              </button>
            </form>
            </section>
          </nav>
          <section className='pages'>
            <div className='buttonspages'>
              <button
                onClick={() => setActualPage(ActualPage - 1)}
                disabled={ActualPage === 1}
                className='buttonbef'>
                <i className='bx bx-chevron-left-square' ></i>
              </button>
              {pages.map((num) => (
                <button key={num} onClick={() => setActualPage(num)} className='buttons'>
                  {num}
                </button>
              ))}
              <button
                onClick={() => setActualPage(ActualPage + 1)}
                disabled={ActualPage === totalPages}
                className='buttonaft'>
                <i className='bx bx-chevron-right-square' ></i>
              </button>
            </div>
          </section>
          <Location Locations={Locations} residentspaged={residentspaged}/>
          <section className='pages'>
            <div className='buttonspages'>
              <button
                onClick={() => setActualPage(ActualPage - 1)}
                disabled={ActualPage === 1}
                className='buttonbef'>
                <i className='bx bx-chevron-left-square' ></i>
              </button>
              {pages.map((num) => (
                <button key={num} onClick={() => setActualPage(num)} className='buttons'>
                  {num}
                </button>
              ))}
              <button
                onClick={() => setActualPage(ActualPage + 1)}
                disabled={ActualPage === totalPages}
                className='buttonaft'>
                <i className='bx bx-chevron-right-square' ></i>
              </button>
            </div>
          </section>
          <hr className='hrbody'/>
          <footer>
              <div className='infofooter'>
                <h2>Proyecto nº3</h2>
                <div className='creator'>
                  <h4>hecho por:</h4><h4>Nicolás Bernard</h4>
                </div>
                
              </div>
            
          </footer>
        </>
      )}
    </div> 
  )
}

export default App