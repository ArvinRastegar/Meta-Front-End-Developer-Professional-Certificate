import logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <h1>Task: Add an image below</h1>
      <img
      height={200}
      src={logo} 
      alt="Logo"
      />
    </div>
  );
}

export default App;
