import styles from "./App.module.css";
import { useState, useEffect } from "react";
import { Text } from "./Text";

function App() {
  return (
    <div className={styles.App}>
      <ComponentLifecycleUseEffectExample />
    </div>
  );
}

const ComponentLifecycleUseEffectExample = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </div>
  );
};

export default App;
