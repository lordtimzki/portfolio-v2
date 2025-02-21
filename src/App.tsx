import "./App.css";
import Content from "./components/Content/Content";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <div className="bg-gradient-to-b from-purp1 to-purp2 min-h-screen">
      <Menu></Menu>
      <div className="font-roboto container flex items-center justify-center max-w-2xs  text-white sm:max-w-lg fixed sm:right-25 sm:top-25">
        <Content></Content>
      </div>
    </div>
  );
}

export default App;
