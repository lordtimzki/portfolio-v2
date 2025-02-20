import Options from "./Options";

const Menu = () => {
  return (
    <div className="container text-white pl-6 pr-6 fixed bottom-15 font-Roboto max-w-md">
      <h1 className="font-thin text-7xl select-none">Tim Dacalos</h1>
      <p className=" font-thin pt-2 text-center sm:pl-4 sm:text-left sm:pt-0 select-none">
        Front-End Developer
      </p>
      <Options></Options>
    </div>
  );
};

export default Menu;
