import TreeData from './TreeData.js'
import { FaFolderOpen } from "react-icons/fa";

function FolderList() {
  return (
    <div>
      {TreeData && TreeData.length > 0 ? (
        TreeData.map((folders, index) => (
          <p key={index}>
            <FaFolderOpen />
            {folders.label}
          </p>
        ))
      ) : (
        <p>No Folders to display</p>
      )}
    </div>
  );
}

export default FolderList