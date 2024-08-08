import {TreeData} from 'TreeData.js'

function FolderList() {
  return (
      <div>
          {
              TreeData && TreeData.length > 0 ? (
                  TreeData.map((folders) => {
                      <p>{ folders.label }</p>
              })
              ) : (
                      <p>No Folders to display</p>
              )
          }
    </div>
  )
}

export default FolderList