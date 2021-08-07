import "./App.css";
import BasicForm from "./components/BasicForm";
import LoginForm from "./components/LoginForm";
import SimpleInput from "./components/SimpleInput";

function App() {
  return (
    <div className="app">
      <SimpleInput />
      <BasicForm />
      <LoginForm />
    </div>
  );
}

export default App;
