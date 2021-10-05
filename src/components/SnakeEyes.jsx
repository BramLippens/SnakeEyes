import { useState } from "react";
import Dice from "./Dice";

export default function SnakeEyes() {
  const [eyes, setEyes] = useState([4, 4]);
  const [points, setPoints] = useState(0);
  console.log(points);
  const changeEye = (index) => {
    const newEye = Math.floor(Math.random() * 6) + 1;
    const newPoints = points + newEye;
    setPoints(newPoints);

    eyes[index] = newEye;
    setEyes([...eyes])
  }
  const reset = () => {
    setEyes([4, 4]);
    setPoints(0);
  }
  return (
    <>
      <h1>Snake Eyes</h1>
      <p>
        {
          eyes.map((e, index) => <Dice eye={e} changeEye={() => changeEye(index)} />)
        }
      </p>
      <p>
        {points}
      </p>
      <p>
        {
          <button onClick={reset}>Reset</button>
        }
      </p>
    </>
  )
}