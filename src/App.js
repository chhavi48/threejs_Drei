import Laptop from './Laptop';
// import logo from './logo.svg';
// import './App.css';
import {Canvas} from "@react-three/fiber"
function App() {
  return (
    <div className="App">
      <Canvas
      camera={{
         fov:45,
         near:0.1,
         far:2000,
         position:[-3,1.5,4]
      }}

      >
        <Laptop/>
        

      </Canvas>
    </div>
  );
}

export default App;
