import { NavLink } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <div className='container-fluid d-flex justify-content-center'>
        <NavLink className='navbar-brand' to='/'>
          <FaHome size={50} color='white' />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
