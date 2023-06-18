import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const BeerDetails = () => {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/${beerId}`
        );
        setBeer(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeerDetails();
  }, [beerId]);

  if (!beer) {
    return (
      <div className='container'>
        <h1>Beer Details</h1>
        <h3 className='mt-4'>Beer Not Found</h3>
        <Link to='/beers' className='btn btn-primary mt-4'>
          Back to Beers' Page
        </Link>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Beer Details</h1>

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

      <Link to='/beers' className='btn btn-primary mt-4'>
        Back to Beers' Page
      </Link>
    </div>
  );
};

export default BeerDetails;
