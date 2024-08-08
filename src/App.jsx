import './App.css'
import FolderList from './components/FolderList'
import treeData from './components/treeData';


function App() {

  return (
    <div className="side vh-100 p-3" style={{ width: "250px" }}>
      <h2>Computer</h2>
      <FolderList data={treeData} />
    </div>
  );
}

export default App
