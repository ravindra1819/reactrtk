import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className="text-3xl font-bold mb-4">Counter: {count}</h1>

      <div className="flex space-x-4">
        <button
          onClick={() => setCount(count + 1)}
          className="bg-green-600 text-white px-5 py-2 rounded-lg"
        >
          Increment
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="bg-red-600 text-white px-5 py-2 rounded-lg"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}
