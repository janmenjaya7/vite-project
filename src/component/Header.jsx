import reactImg from "../assets/react-core-concepts.png";
// import Header from "./component/Header.jsx";

const arr = ["kanha", "janmenjaya", "chiku"];
function getRandom(max) {
  return Math.floor(Math.random() * (max + 1));
}
function Header() {
  const value = arr[getRandom(2)];
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {value} Fundamental React concepts you will need for almost any app you
        are going to build!
      </p>
    </header>
  );
}
export default Header;
