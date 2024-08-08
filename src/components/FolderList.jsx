import './FolderList.css'
import FolderNode from "./FolderNode";

function FolderList({ data }) {
    return (
        <>
            {data.map((item, index) => (
                <FolderNode key={index} item={item} />
            ))}
        </>
    );
}

export default FolderList