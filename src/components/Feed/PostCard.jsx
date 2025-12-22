//libs
import {useState} from 'react';
//components
import Link from "../Link";
//icons
import { TbMessageReport } from "react-icons/tb";
import { MdClose, MdOutlineIosShare } from 'react-icons/md';
import { IoCheckmarkSharp, IoHammerOutline, IoDownloadOutline } from 'react-icons/io5';;
import { FaBookmark, FaRegBookmark } from 'react-icons/fa';

function PostCard() {
    const [bookmarked, setBookmarked] = useState(false);
    //handlers
    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    }
    return (
        <article className='post-card'>
            <div className='framework-metadata'>
                <div className='framework-thumbnail'>
                    {/*IMAGE GOES HERE*/}
                </div>
                <div className='framework-description'>
                    <h3>
                        Policy Framework 1.0
                    </h3>
                    <p>
                    A policy framework is a shared blueprint: goals, rules, and trade-offs that guide how a proposal works and how it can be improved.
                    </p>
                </div>
            </div>
            <div className='interaction-bar'>
                <div className='interaction-btn-container'>
                    <Link href='/report' className='report-btn'>
                        <TbMessageReport className="interaction-icon"/>
                    </Link>
                </div>
                <div className='vote-cluster'>
                    <div className='interaction-btn-container'>
                        <button className='interaction-btn'>
                            <MdClose className='interaction-icon'/>
                        </button>
                    </div>
                    <div className='open-btn-container'>
                        <button id='openBtn'>
                            open
                        </button>
                    </div>
                    <div className='interaction-btn-container'>
                        <button className='interaction-btn'>
                            <IoCheckmarkSharp className='interaction-icon'/>
                        </button>
                    </div>
                </div>
                <div className='interaction-btn-container'>
                    <button className='interaction-btn'>
                        <IoHammerOutline className='interaction-icon'/>
                    </button>
                </div>
                <div className='interaction-btn-container'>
                    <button className='interaction-btn'>
                        <MdOutlineIosShare className='interaction-icon'/>
                    </button>
                </div>
                <div className='interaction-btn-container'>
                    <button className='interaction-btn'>
                        <IoDownloadOutline className='interaction-icon'/>
                    </button>
                </div>
                <div className='interaction-btn-container'>
                    <button className='interaction-btn' onClick={handleBookmark}>
                     {bookmarked ? <FaBookmark className='interaction-icon'/> : <FaRegBookmark className='interaction-icon'/>}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default PostCard;