//components
import MetadataCard from './MetadataCard';
//custom hooks
import useThothContext from '../../hooks/use-thoth-context';
//icons
import { FiPlusCircle } from 'react-icons/fi';

function Policies() {
    //context management
    const {metadataCardToggle, setMetadataCardToggle, thumbnail, setThumbnail, file, setFile, policies, setPolicies} = useThothContext();

    //handlers
    const addThumbnailHandler = () => {
        //
    }
    const addFileHandler = () => {
        //
    }
    const addPolicyHandler = () => {
        setMetadataCardToggle(true);
    }

    return (
        <section className='page policies'>
            <button className='add-policy-button' onClick={addPolicyHandler}>
                <FiPlusCircle className='add-icon'/>
            </button>
            {metadataCardToggle ? <MetadataCard/> : ''}
        </section>
    );
};

export default Policies;