//custom hooks
import useThothContext from "../../hooks/use-thoth-context";
//icons
import { IoCloudUploadOutline } from "react-icons/io5";

function MetadataCard() {
    //context managements
    const {setMetadataCardToggle} = useThothContext();

    //handlers
    const handleSave = () => {
        setMetadataCardToggle(false);
    }

    return (
        <article className='metadata-card'>
            <div className='upload-metadata'>
                <div className='upload-thumbnail-container'>
                    <button className='upload-thumbnail-btn'>
                        <IoCloudUploadOutline className='upload-icon'/>
                    </button>
                </div>
                <div className='upload-file-container'>
                    <button className='upload-file-btn'>
                        Upload File
                    </button>
                    <em>(Maximum file size 35mb)</em>
                </div>
            </div>
            <div className='save-btn-container'>
                <button className='save-btn' onClick={handleSave}>
                    Save
                </button>
            </div>
        </article>
    );
};

export default MetadataCard;