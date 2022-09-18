import { useState } from "react";
import Card from "./Card";

export default function Main() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);

  return (
    <Card height={height} weight={weight}>
      <div className="text-center my-4">
        <span className="text-3xl font-medium">BMI Calculator</span>
      </div>
      <div className="flex justify-between gap-2">
        <div class="mt-1">
          <input
            type={"number"}
            min={1}
            placeholder="Your Height [cm]"
            value={height}
            onChange={(e) => {
              setHeight(e.target.value);
            }}
            class="block w-full px-5 py-3 text-base text-gray-300 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-transparent focus:outline-none"
          />
        </div>

        <div class="mt-1">
          <input
            type={"number"}
            min={1}
            placeholder="Your Weight [kg]"
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            class="block w-full px-5 py-3 text-base text-gray-300 placeholder-gray-300 transition duration-500 ease-in-out transform border-2 border-gray-300 rounded-lg bg-transparent focus:outline-none"
          />
        </div>
      </div>

      
      
    </Card>
  );
}
