import "./App.css";
import Menu from "./components/Menu/Menu";
import Window from "./components/Window";

function App() {
  return (
    <div className="bg-gradient-to-b from-purp1 to-purp2 min-h-screen">
      <div className="flex flex-col min-h-screen sm:block">
        <Menu />
        <div
          className="font-roboto container
          sm:fixed sm:right-35 sm:top-25 sm:max-w-lg 
          max-w-2xs mx-auto mt-10 sm:mt-0 px-4"
        >
          <Window />
        </div>
      </div>
    </div>
  );
}

export default App;
