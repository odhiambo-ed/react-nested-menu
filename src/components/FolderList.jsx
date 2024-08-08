import React from "react";
import PropTypes from "prop-types";
import "./FolderList.css";
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

FolderList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      children: PropTypes.arrayOf(PropTypes.object),
    })
  ).isRequired,
};

export default FolderList;