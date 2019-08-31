import Link from 'next/link';

const Navbar = () => (
  <nav className='navbar navbar-expand navbar-dark bg-dark mb-4'>
    <div className='container'>
      <a className='navbar-brand' href='#'>
        BitcoinPörssi
      </a>
      <div className='collapse navbar-collapse'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link href='/'>
              <a className='nav-link'>Koti</a>
            </Link>
          </li>
          <li className='nav-item'>
            <Link href='/about'>
              <a className='nav-link'>UKK</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
