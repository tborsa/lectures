const synth = window.speechSynthesis;
const useSpeak = () => {
  const [pitch, setPitch] = useState(0);
  const [rate, setRate] = useState(0);

  const voices = synth.getVoices();

  const speak = sayString => {
    const utterThis = new SpeechSynthesisUtterance(sayString);
    utterThis.voice = voices[0];
    utterThis.pitch = pitch;
    utterThis.rate = rate;
    synth.speak(utterThis);
  };

  return {
    speak,
    setPitch,
    setRate
  };
};

//==================================================>

const ShowMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", mP => {
      setX(mP.clientX);
      setY(mP.clientY);
    });
  }, []);

  return (
    <h1>
      X: {x}, Y: {y}
    </h1>
  );
};

const useMousePosition = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    document.addEventListener("mousemove", mP => {
      setX(mP.clientX);
      setY(mP.clientY);
    });
  }, []);

  return [x, y];
};

const MousePositionForSize = () => {
  const [x, y] = useMousePosition();

  return (
    <h1
      style={{
        fontSize: x,
        transform: `rotate(${y}deg)`
      }}
    >
      Woah!
    </h1>
  );
};

const MousePositionForColour = () => {
  const [x, y] = useMousePosition();

  return (
    <h1
      style={{
        color: `rgb(${x}, ${y}, 100)`
      }}
    >
      Woah!
    </h1>
  );
};

function App() {
  return (
    <div className="App">
      <ShowMousePosition />
      <MousePositionForColour />
      <MousePositionForSize />
    </div>
  );
}

//================================================================<

import React, { useState, useEffect } from "react";

const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  o: "🌷",
  "0": "🍀",
  "@": "🌵",
  "*": "🌴"
};

const Garden = () => {
  const [seeds, setSeeds] = useState({});
  const [garden, setGarden] = useState([]);

  const waterGarden = plot => {
    console.log("plot", plot);
    let updatePlants = garden.slice(0);
    updatePlants[plot].size++;
    setGarden(updatePlants);
  };

  const plantSeed = seed => {
    // let updatedSeeds = {...seeds};
    // delete updateSeeds[seed];
    //or
    let { [seed]: value, ...updatedSeeds } = seeds;
    setSeeds(updatedSeeds);
    // const newGarden = garden.slice(0)
    // newGarden.push(seed)
    // setGarden(newGarden);
    setGarden([...garden, { plant: seeds[seed], size: 1 }]);
  };

  const getSeeds = () => {
    let seeds = {};
    let bin = Object.entries(seedLookup);
    for (let i = 0; i < 5; i++) {
      let num = Math.floor(Math.random() * 5);
      seeds[bin[num][0]] = bin[num][1];
    }
    setSeeds(seeds);
  };

  return {
    waterGarden,
    plantSeed,
    getSeeds,
    seeds,
    garden
  };
};

export default useGarden;

