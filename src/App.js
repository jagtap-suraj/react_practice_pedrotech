import "./App.css";

function App() {
  return (
    <div className="App">
      <User />
      <Job salary={90000} position="Senior SDE" company="Amazon" />
      <Job salary={12000} position="Junior SDE" company="Google" />
      <Job salary={10000} position="Project Manager" company="Netflix" />
    </div>
  );
}

const User = () => {
  return (
    <div>
      <h1>Suraj</h1>
      <h1>20</h1>
      <h1>testSuraj@gmail.com</h1>
    </div>
  );
};

// User Component
const Job = (props) => {
  return (
    <div>
      <h1>{props.salary}</h1>
      <h1>{props.position}</h1>
      <h1>{props.company}</h1>
    </div>
  );
};

export default App;
