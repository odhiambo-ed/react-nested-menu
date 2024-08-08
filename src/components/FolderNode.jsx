import { useState } from "react";
import { FaFolderOpen } from "react-icons/fa";

function FolderNode({ item, level = 0 }) {
  const [open, setOpen] = useState(false)
  const childrenPresent = item.children && item.children.length > 0

  return (
    <ul className="nav flex-column">
      <li className={`nav-item`} style={{paddingLeft: `${level * 20}px`}}>
        <a className="" href="#">
          <span>{childrenPresent && <span>{open ? "+" : "-"}</span>}</span>
          <span>
            <FaFolderOpen />
          </span>{" "}
          {item.label}
          {childrenPresent && (
            <div className={`${open ? "show" : "hide"}`}>
              {item.children.map((child, index) => (
                <FolderNode key={index} item={child} level={level + 1} />
              ))}
            </div>
          )}
        </a>
      </li>
    </ul>
  );
}

export default FolderNode