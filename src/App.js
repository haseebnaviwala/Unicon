// import logo from './logo.svg';
import './App.css';
import Front from './components/front';

function App() {
  return (
    <div onScroll={() => {console.log("Hello")}}>
        <Front></Front>
    </div>
  );
}

export default App;
