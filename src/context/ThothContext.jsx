import { createContext, useState} from "react";

//context
const ThothContext = createContext();

function Provider({children}) {
    const [metadataCardToggle, setMetadataCardToggle] = useState(false);
    const [thumbnail, setThumbnail] = useState(null);
    const [file, setFile] = useState(null);
    const [policies, setPolicies] = useState([]);

    return (
        <ThothContext.Provider value={{metadataCardToggle, setMetadataCardToggle, thumbnail, setThumbnail, file, setFile, policies, setPolicies}}>
            {children}
        </ThothContext.Provider>
    );
};

export {ThothContext, Provider}

