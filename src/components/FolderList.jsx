import TreeData from './TreeData.js'
import { FaFolderOpen } from "react-icons/fa";
import './FolderList.css'

function FolderList() {
    return (
        <div className="side vh-100 p-3" style={{ width: '250px' }}>
            <h2>Computer</h2>
            {TreeData && TreeData.length > 0 ? (
                TreeData.map((folders, index) => (
                    <ul key={index} className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">
                                <span>
                                    <FaFolderOpen />
                                </span>
                                <span className=''>{folders.label}</span>
                            </a>
                        </li>
                    </ul>
                ))
            ) : (
                <p>No Folders to display</p>
            )}
        </div>
    );
}

export default FolderList