import React from 'react';

import './App.css';
import Header from './layout/Header/Header';
import Footer from './layout/Footer/Footer';
import Art from './sections/Art/Art';
import Reviews from './sections/Reviews/Reviews';
import Features from './sections/Features/Features';
// import axios from 'axios'

function App() {

  // const [photo, setPhoto] = useState('');
  // const [result, setResult] = useState([]);
  // const [clientId, setClientId] = useState("Qli6mFphmpI3X7s_htqZDAcqsskRlhZR9ugp2e36K3k");

  // const handleChange = (e) => {
  //   setPhoto(e.target.value);
  // }
  // const handleSubmit = (e) => {
  //   console.log(photo)

  //   // https://api.unsplash.com/search/photos?query=${photo}&client_id=Qli6mFphmpI3X7s_htqZDAcqsskRlhZR9ugp2e36K3k

  //   axios.get(`https://api.unsplash.com/search/photos?query=${photo}&client_id=${clientId}`)
  //   .then(response => {
  //     console.log(response)
  //     setResult(response.data.results)
  //   })
  // }

  return (
    <div className="App">
      <Header />
      <Art />
      <Features />
      <Reviews />
      <Footer />

















      {/* Gallery app
      <input type="text" onChange={handleChange} name="photo" placeholder="Search photos..."/>
      <button type="submit" onClick={handleSubmit}>Search</button>
      <div class="images-container">
      {result.map(photo => (<img src={photo.urls.small} alt={photo.alt_description} key={photo.id}></img>))}
      </div> */}
    </div>
  );
}

export default App;
