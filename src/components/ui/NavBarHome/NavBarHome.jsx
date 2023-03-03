import { Link } from 'react-router-dom';

import './navBarHome.css';

// const itemsNavBar = ["Home", "Services", "FAQ", "About us"];

export const NavBarHome = () => {
  return (

<nav>
      <ul className='header'>
        <Link to="/"><li>Home</li></Link>
        <Link to="/AboutUS"><li>AboutUS</li></Link>
        <Link to="/ContactUS"><li>ContactUS</li></Link>
        <Link to="/ChangeColor"><li>ChangeColor</li></Link>
        <Link to="/Counter"><li>Counter</li></Link>
        <Link to="/Tweet"><li>Tweets</li></Link>
      </ul>
      <ul>
        <img src="https://www.shutterstock.com/image-vector/soccer-ball-stock-vector-260nw-1006106875.jpg" alt="Jun-ito"/>
      </ul>
    </nav>


  )
}