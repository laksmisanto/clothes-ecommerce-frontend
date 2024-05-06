import Navigation from "./customer/components/Navigation/Navigation";
import "./App.css";
import HomePage from "./customer/pages/HomePage/HomePage";

function App() {
  return (
    <>
      <div>
        <Navigation />
        <div>
          <HomePage />
        </div>
      </div>
    </>
  );
}

export default App;
