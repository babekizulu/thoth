import { createContext, useState, useEffect} from "react";

//context
const ThothContext = createContext();

function Provider({children}) {
    const [metadataCardToggle, setMetadataCardToggle] = useState(false);
    const [thumbnail, setThumbnail] = useState(null);
    const [file, setFile] = useState(null);
    const [policies, setPolicies] = useState([]);
    const [toggleTray, setToggleTray] = useState(true);
    const [desktop, setDesktop] = useState(null);
    // eslint-disable-next-line
    const [comments, setComments] = useState([
        {
            comment: 'This is cool!',
            user: 'fishman',
            likes: 5,
            replies: 10,
            timestamp: '2025-12-30T04:25:00.000Z'
        },
        {
            comment: 'Nice choice!',
            user: 'bigbob',
            likes: 7,
            replies: 13,
            timestamp: '2025-12-30T04:17:00.000Z'
        },
        {
            comment: 'Needs some work!',
            user: 'chaaad',
            likes: 2,
            replies: 5,
            timestamp: '2025-12-30T04:38:00.000Z'
        },
    ]);

    //life cycle methods
    useEffect(() => {
        const checkWindowWidth = () => {
            if(window.innerWidth >= 1280) {
                setDesktop(true);
            } else {
                setDesktop(false);
            }
        }
        checkWindowWidth();
    }, [])

    return (
        <ThothContext.Provider value={{
            metadataCardToggle, 
            setMetadataCardToggle, 
            thumbnail, 
            setThumbnail, 
            file, 
            setFile, 
            policies, 
            setPolicies, 
            toggleTray, 
            setToggleTray,
            desktop,
            comments
            }}>
            {children}
        </ThothContext.Provider>
    );
};

export {ThothContext, Provider}

