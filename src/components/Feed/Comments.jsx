//libs
import {useState} from 'react';
//components
import PopupTray from "../PopupTray";
//icons
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoHeartFill, GoHeart } from 'react-icons/go';
function Comments({
    handleCommentSortOptionsToggle, 
    commentSortOption, 
    commentSortOptionsToggled, 
    optionsArr, 
    setCommentSortOption, 
    setCommentSortOptionsToggled,
    comments
}) {
    //state management
    const [liked, setLiked] = useState(false);
    //handlers
    const handleLike = () => {
        setLiked(!liked);
    }
    //mappings
    const renderedComments = comments.map((comment, i) => {
        return (
            <div className='comment' key={i}>
                <b>{comment.user}</b>
                <p>
                    {comment.comment}
                </p>
                {liked ? <GoHeartFill className='comment-like-icon' onClick={handleLike}/>:<GoHeart className='comment-like-icon' onClick={handleLike}/>}
            </div>
        )
    })
    return (
        <div className='comments'>
                <button className='toggle-comment-sort-options' onClick={handleCommentSortOptionsToggle}>
                    {commentSortOption} replies <RiArrowDropDownLine className='comment-sort-options-icon'/>
                </button>
                {commentSortOptionsToggled ? <PopupTray 
                title='Sort Comments' 
                optionsArray={optionsArr} 
                setCommentSortOption={setCommentSortOption}
                setCommentSortOptionsToggled={setCommentSortOptionsToggled}
                /> : ''}
                {renderedComments}
        </div>
    )
}

export default Comments;