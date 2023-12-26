import styles from "./App.module.css";
import { User } from "./User";

function App() {
  return (
    <div className={styles.App}>
      <ConditionalRendering />
      <List />
      <ListOfObjects />
      <Planents />
    </div>
  );
}

const ConditionalRendering = () => {
  const age = 17;
  const isGreen = true;

  return (
    <div>
      {age > 18 ? <h1>Overage</h1> : <h1>Underage</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}>This has Color</h1>
      {isGreen && <button>This is a Button</button>}
    </div>
  );
};

const List = () => {
  const names = ["Suraj", "Yug", "Kunal", "Aditya", "Siddharth", "Maitreyi"];

  return (
    <div>
      {names.map((name, key) => {
        return <h1 key={key}>{name}</h1>;
      })}
    </div>
  );
};

const ListOfObjects = () => {
  const users = [
    { name: "Suraj", age: 20 },
    { name: "Harsh", age: 19 },
    { name: "Kunal", age: 21 },
  ];

  return (
    <div>
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
      })}
    </div>
  );
};

const Planents = () => {
  const planets = [
    { name: "Mars", isGasPlanet: false },
    { name: "Earth", isGasPlanet: false },
    { name: "Jupiter", isGasPlanet: true },
    { name: "Venus", isGasPlanet: false },
    { name: "Neptune", isGasPlanet: true },
    { name: "Uranus", isGasPlanet: true },
  ];

  return (
    <div>
      {planets.map(
        (planet, key) => planet.isGasPlanet && <h2>{planet.name}</h2>
      )}
    </div>
  );
};

export default App;
