import { Link } from 'react-router-dom';
import beers from '../assets/beers.png';
import randomBeer from '../assets/random-beer.png';
import newBeer from '../assets/new-beer.png';

const Home = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
      <div className='list-group'>
        <Link
          to='/beers'
          className='list-group-item list-group-item-action mb-4 mt-4'
        >
          <img src={beers} alt='beers img' className='img-fluid' width={600} />
          <h4 className='mt-2'>All Beers</h4>
        </Link>

        <Link
          to='/random-beer'
          className='list-group-item list-group-item-action mb-4'
        >
          <img
            src={randomBeer}
            alt='random beer img'
            className='img-fluid'
            width={600}
          />
          <h4 className='mt-2'>Random Beer</h4>
        </Link>

        <Link
          to='/new-beer'
          className='list-group-item list-group-item-action mb-4'
        >
          <img
            src={newBeer}
            alt='new beer img'
            className='img-fluid'
            width={600}
          />
          <h4 className='mt-2'>New Beer</h4>
        </Link>
      </div>
    </div>
  );
};

export default Home;
