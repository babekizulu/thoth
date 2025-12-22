//components
import Link from "./Link";
//icons
import { CiSearch } from "react-icons/ci";
import { IoGitNetworkSharp } from "react-icons/io5";
import { GoLightBulb } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";

function Tray() {
    return (
        <nav className='tray'>
            <ul>
                <li>
                    <Link href='/search' className='tray-item'>
                        <CiSearch className='icon'/>
                    </Link>
                </li>
                <li>
                    <Link href='/network' className='tray-item'>
                        <IoGitNetworkSharp className='icon'/>
                    </Link>
                </li>
                <li>
                    <Link href='/create' className='tray-item'>
                        <GoLightBulb className='icon'/>
                    </Link>
                </li>
                <li>
                    <Link href='/dashboard' className='tray-item'>
                        <RxDashboard className='icon'/>
                    </Link>
                </li>
                <li>
                    <Link href='/settings' className='tray-item'>
                        <IoSettingsOutline className='icon'/>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Tray;