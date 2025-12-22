//components
import Link from './Link';
//icons
import logo from './icons/thoth_logo60x60.svg';

function Logo() {
    return (
        <Link href='/' className='logo'>
            <img src={logo}/>
            thoth*
        </Link>
    );
};

export default Logo;