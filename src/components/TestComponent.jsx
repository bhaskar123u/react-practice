import { useState } from "react";

const TestComponent = () => {
    const [count, setCount] = useState(0);
    
    function buttonClickHandler() {
        setCount(count + 1);
    }

    function resetClickHandler() {
      setCount(0);
    }
    
  return (
    <div>
      <div className="border border-black w-1/4 p-2 ml-2 rounded-lg bg-gray-100">
        <span>
          <p>This is multiple p tags in a single span tag</p>
          <p>Hi</p>
          <p>Hello</p>
        </span>
      </div>
      <br />
      <div className="border border-black w-1/4 p-2 ml-2 rounded-lg bg-gray-100">
        <p>This is multiple span tags in a single div tag</p>
        <span>Hi</span>
        <span>Hello</span>
        <span>Count is : {count}</span>
        <button
          className="border border-black bg-green-200 rounded-lg p-1 ml-2"
          onClick={buttonClickHandler}
        >
          Click Me
        </button>
        <button
          className="border border-black bg-green-200 rounded-lg p-1 ml-2"
          onClick={resetClickHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TestComponent;
