import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const NewBeer = () => {
  const [name, setName] = useState('');
  const [tagline, setTagline] = useState('');
  const [description, setDescription] = useState('');
  const [firstBrewed, setFirstBrewed] = useState('');
  const [brewersTips, setBrewersTips] = useState('');
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState('');

  const navigate = useNavigate();

  const handleName = event => {
    setName(event.target.value);
  };

  const handleTagline = event => {
    setTagline(event.target.value);
  };

  const handleDescription = event => {
    setDescription(event.target.value);
  };

  const handleFirstBrewed = event => {
    setFirstBrewed(event.target.value);
  };

  const handleBrewerTips = event => {
    setBrewersTips(event.target.value);
  };

  const handleAttenuationLevel = event => {
    setAttenuationLevel(event.target.value);
  };

  const handleContributedBy = event => {
    setContributedBy(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const addBeer = {
      name,
      tagline,
      description,
      first_brewed: firstBrewed,
      brewers_tips: brewersTips,
      attenuation_level: attenuationLevel,
      contributed_by: contributedBy
    };

    try {
      await axios.post(
        'https://ih-beers-api2.herokuapp.com/beers/new',
        addBeer
      );
      navigate('/beers');
    } catch (error) {
      console.log(error);
    }

    setName('');
    setTagline('');
    setDescription('');
    setFirstBrewed('');
    setBrewersTips('');
    setAttenuationLevel(0);
    setContributedBy('');
  };

  return (
    <div className='container'>
      <h1>Add a New Beer</h1>

      <form onSubmit={handleSubmit}>
        <div className='mb-3 mt-4'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-control'
            id='name'
            value={name}
            onChange={handleName}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='tagline' className='form-label'>
            Tagline
          </label>
          <input
            type='text'
            className='form-control'
            id='tagline'
            value={tagline}
            onChange={handleTagline}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='description' className='form-label'>
            Description
          </label>
          <input
            type='text'
            className='form-control'
            id='description'
            value={description}
            onChange={handleDescription}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='firstBrewed' className='form-label'>
            First Brewed
          </label>
          <input
            type='text'
            className='form-control'
            id='firstBrewed'
            value={firstBrewed}
            onChange={handleFirstBrewed}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='brewersTips' className='form-label'>
            Brewer Tips
          </label>
          <input
            type='text'
            className='form-control'
            id='brewersTips'
            value={brewersTips}
            onChange={handleBrewerTips}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='attenuationLevel' className='form-label'>
            Attenuation Level
          </label>
          <input
            type='number'
            className='form-control'
            id='attenuationLevel'
            value={attenuationLevel}
            onChange={handleAttenuationLevel}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='contributedBy' className='form-label'>
            Contributed By
          </label>
          <input
            type='text'
            className='form-control'
            id='contributedBy'
            value={contributedBy}
            onChange={handleContributedBy}
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Add New
        </button>
      </form>
    </div>
  );
};

export default NewBeer;
