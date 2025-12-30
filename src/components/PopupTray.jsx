//libs
import {useState, useRef, useEffect} from 'react';
// eslint-disable-next-line
import {motion, useMotionValue} from 'motion/react';
//custom hooks
import useThothContext from '../hooks/use-thoth-context';
//icons
import { IoCheckmarkSharp } from 'react-icons/io5';
import { MdClose } from 'react-icons/md';

function PopupTray({title, optionsArray, setCommentSortOptionsToggled, setCommentSortOption}) {
    //refs
    const trayRef = useRef(null);
    //motion management
    const y = useMotionValue(0);
    //context management
    const {desktop, setToggleTray, toggleTray} = useThothContext();
    //state management
    const [selected, setSelected] = useState('');
    const [dragConstraints, setDragConstraints] = useState({top: 0, bottom: 0});
    //variables
    
    // Calculate dynamic drag constraints based on tray height
    useEffect(() => {
        if (trayRef.current) {
            const height = trayRef.current.offsetHeight;
            // Allow dragging down by the full height of the tray
            setDragConstraints({top: 0, bottom: height});
        }
    }, [optionsArray, title]); // Recalculate when content changes
    
    //handlers
    const handleSelection = (option) => {
        setSelected(option);
        setCommentSortOption(option);
    }
    const handleDragEnd = () => {
        // If dragged down past 30% of the tray height, close it
        if (trayRef.current) {
            const height = trayRef.current.offsetHeight;
            const threshold = height * 0.3;
            if (y.get() > threshold) {
                setCommentSortOptionsToggled(false);
                setToggleTray(!toggleTray);
            }
        }
    }
    const handleClosePopupTray = () => {
        setCommentSortOptionsToggled(false);
        setToggleTray(!toggleTray);
    }
    const renderedOptions = optionsArray.map((option,i) => {
        return (
            <div className='popup-tray-option' key={i}>
                <p>{option}</p>
                <div className={selected == option ? 'checkbox checkbox-clicked' : 'checkbox'} onClick={() => handleSelection(option)}>
                    {selected == option ? <IoCheckmarkSharp className='checkmark-icon'/> : ''}
                </div>
            </div>
        )
    })
    return (
        <div className='popup-tray-wrapper'>
            <motion.div 
            ref={trayRef}
            className='popup-tray'
            drag='y'
            dragConstraints={dragConstraints}
            style={{y}}
            onDragEnd={handleDragEnd}
            dragElastic={0.2}
            >
                {desktop ? <MdClose className='close-notch-icon' onClick={handleClosePopupTray}/> : <div className='notch'></div>}
                <h3>{title}</h3>
                {renderedOptions}
            </motion.div>
        </div>
    );
};

export default PopupTray;