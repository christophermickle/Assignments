import { createSignal} from "solid-js";

function Solid() {
  const [count, setCount] = createSignal(0);
  const increment = () => {
    setCount((prev:number)=>prev+1)
  }
  const decrement =() => {
    setCount((prev:number)=>prev > 0 ? prev-1 : prev)
  }
  return (
    <div class="text-white">
      <h2 class="text-3xl ">Solid</h2>
      <p>The count is {count()}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default Solid;
