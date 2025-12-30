//libs
import {useState} from 'react';
//components
import Link from "../Link";
import Comments from './Comments';
//custom hooks
import useThothContext from '../../hooks/use-thoth-context';
//icons
import { TbMessageReport } from "react-icons/tb";
import { MdClose, MdOutlineIosShare } from 'react-icons/md';
import { IoCheckmarkSharp, IoHammerOutline, IoDownloadOutline } from 'react-icons/io5';;
import { FaBookmark, FaRegBookmark, FaRegCommentAlt } from 'react-icons/fa';
import { RiArrowDropDownLine } from 'react-icons/ri';

function PostCard() {
    //context management
    const {setToggleTray, toggleTray, comments} = useThothContext();
    //state management
    const [bookmarked, setBookmarked] = useState(false);
    const [toggleComments, setToggleComments] = useState(false);
    const [commentSortOption, setCommentSortOption] = useState('Most relevant');
    const [commentSortOptionsToggled, setCommentSortOptionsToggled] = useState(false);
    //variables
    const optionsArr = ['Most relevant', 'Most recent', 'Most liked'];
    //handlers
    const handleBookmark = () => {
        setBookmarked(!bookmarked);
    }
    //handlers
    const handleSortComments = () => {
        if(commentSortOption == 'Most relevant') {
            comments.sort((a,b) => a.likes - b.likes);
        }
        if(commentSortOption == 'Most recent') {
            comments.sort((a,b) => Date.parse(a.timestamp) - Date.parse(b.timestamp));
        }
        if(commentSortOption == 'Most liked') {
            comments.sort((a,b) => a.replies - b.replies);
        }
    }
    const handleToggleComments = () => {
        setToggleComments(!toggleComments);
        handleSortComments();
    }
    const handleCommentSortOptionsToggle = () => {
        setCommentSortOptionsToggled(!commentSortOptionsToggled);
        setToggleTray(!toggleTray);
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
                    <button className='interaction-btn' onClick={handleToggleComments}>
                        <FaRegCommentAlt className='interaction-icon'/>
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
            {toggleComments ? <Comments 
            handleCommentSortOptionsToggle={handleCommentSortOptionsToggle} 
            commentSortOption={commentSortOption}
            commentSortOptionsToggled={commentSortOptionsToggled}
            optionsArr={optionsArr}
            setCommentSortOption={setCommentSortOption}
            setCommentSortOptionsToggled={setCommentSortOptionsToggled}
            comments={comments}
            /> : ''}
        </article>
    );
};

export default PostCard;