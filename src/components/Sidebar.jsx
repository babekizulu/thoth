//components
import Link from "./Link";
//icons
import { GoHome } from "react-icons/go";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { IoGitNetworkSharp } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";


function Sidebar() {
    return (
        <aside className='sidebar'>
            <nav>
                <ul>
                    <li>
                        <Link href='/' className='sidebar-item'>
                        <GoHome className='sidebar-icon'/> Feed
                        </Link>
                    </li>
                    <li>
                        <Link href='/policies' className='sidebar-item'>
                            <RxDashboard className='sidebar-icon'/> Policies
                        </Link>
                    </li>
                    <li>
                        <Link href='/analytics' className='sidebar-item'>
                            <MdOutlineAnalytics className='sidebar-icon'/> Analytics
                        </Link>
                    </li>
                    <li>
                        <Link href='/networks' className='sidebar-item'>
                            <IoGitNetworkSharp className='sidebar-icon'/> Networks
                        </Link>
                    </li>
                    <li>
                        <Link href='/settings' className='sidebar-item'>
                            <IoSettingsOutline className='sidebar-icon'/> Settings
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className='profile-nav-container'>
            <hr/>
                <Link href='/profile' className='sidebar-profile-nav'>
                    <div className='sidebar-profile-picture'>
                        S
                        {/*PROFILE PICTURE*/}
                    </div>
                    <p>
                        @saerbridge
                    </p>
                </Link>
            </div>
        </aside>
    );
};

export default Sidebar;