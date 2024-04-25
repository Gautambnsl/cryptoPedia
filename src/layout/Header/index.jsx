import Image from 'next/image';
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className='header-div'>
        <Image src={Logo} alt="Logo" loading="lazy" width={50} height={50} />
        <button className="world-coin-button">WorldCoin</button>
      </div>
    </header>
  );
};

export default Header;
