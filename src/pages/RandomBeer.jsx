import axios from 'axios';
import { useState, useEffect } from 'react';

const RandomBeer = () => {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    const fetchRandomBeer = async () => {
      try {
        const response = await axios.get(
          'https://ih-beers-api2.herokuapp.com/beers/random'
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchRandomBeer();
  }, []);

  if (!beer) {
    return (
      <div className='container'>
        <h1>Random Beer</h1>
        <div className='text-center'>Loading...</div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Random Beer</h1>

      <div className='card mt-4'>
        <div className='d-flex justify-content-center'>
          <img src={beer.image_url} alt={beer.name} className='card-img-top' />
        </div>
        <div className='card-body'>
          <h3 className='card-title'>{beer.name}</h3>
          <p className='card-text'>{beer.tagline}</p>
          <p className='card-text'>First Brewed: {beer.first_brewed}</p>
          <p className='card-text'>
            Attenuation Level: {beer.attenuation_level}
          </p>
          <p className='card-text'>{beer.description}</p>
          <p className='card-text'>Contributed By: {beer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
};

export default RandomBeer;
