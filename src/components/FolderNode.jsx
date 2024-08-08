import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

function FolderNode({ item, level = 0 }) {
  const [open, setOpen] = useState(false)
  const childrenPresent = item.children && item.children.length > 0

  return (
    <ul className="nav flex-column">
      <li className="nav-item">
        <a className="" href="#">
          <span>
            {
              childrenPresent && <span>{open ? "+" : "-"}</span>
            }
          </span>
          <span>
            <FaFolderOpen />
          </span>{" "}
          {item.label}
          {
            
          }
        </a>
      </li>
    </ul>
  );
}

export default FolderNode