//custom hooks
import useThothContext from "../../hooks/use-thoth-context";
//icons
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";

function MetadataCard() {
    //context managements
    const {setMetadataCardToggle} = useThothContext();

    //handlers
    const handleClose = () => {
        setMetadataCardToggle(false);
    }
    const handleSave = () => {
        setMetadataCardToggle(false);
    }

    return (
        <article className='metadata-card'>
            <div className='close-btn-container'>
                <button className='close-btn' onClick={handleClose}>
                    <MdClose className='close-icon'/>
                </button>
            </div>
            <div className='upload-metadata'>
                <div>
                    <div className='upload-thumbnail-container'>
                        <button className='upload-thumbnail-btn'>
                            <IoCloudUploadOutline className='upload-icon'/>
                        </button>
                    </div>
                <em>(Recommended Dimensions: 595 x 842px)</em>
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