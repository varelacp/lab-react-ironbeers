import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Beers = () => {
  const [beers, setBeers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchBeers = async () => {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
        );
        console.log('axios response:', response.data);
        setBeers(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBeers();
  }, [searchQuery]);

  const handleSearch = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className='container'>
      <h1 className='mt-4 mb-4'>All Beers</h1>

      <div className='row'>
        <div className='col-md-12 mb-4'>
          <div className='input-group'>
            <input
              type='text'
              className='form-control'
              placeholder='Search Beers'
              value={searchQuery}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>

      <div className='row'>
        {beers.map(beer => (
          <div key={beer._id} className='col-md-4 mb-4'>
            <div className='card'>
              <Link to={`/beers/${beer._id}`}>
                <img
                  src={beer.image_url}
                  alt={beer.name}
                  className='card-img-top beer-image'
                />
              </Link>
              <div className='card-body'>
                <h5 className='card-title'>{beer.name}</h5>
                <p className='card-text'>{beer.tagline}</p>
                <p className='card-text'>{beer.contributed_by}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Beers;
