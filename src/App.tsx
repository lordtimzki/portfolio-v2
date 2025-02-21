import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="bg-gradient-to-b from-purp1 to-purp2 min-h-screen">
      <div className="flex flex-col min-h-screen sm:block">
        <Menu />
        <div
          className="font-roboto container text-gray-4
          sm:fixed sm:right-25 sm:top-25 sm:max-w-lg 
          max-w-2xs mx-auto mt-20 sm:mt-0 px-4"
        >
          <Content />
        </div>
      </div>
    </div>
  );
}

export default App;
