import { useState } from "react";

export const Text = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input onChange={(event) => setText(event.target.value)} />
      <h3>{text}</h3>
    </div>
  );
};
