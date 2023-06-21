import "./App.css";
import Login from "./components/Login";

function App() {
  return (
    <div className="app">
      <Login
        onSubmit={({ username, password }) => console.log(username, password)}
      />
    </div>
  );
}

export default App;
