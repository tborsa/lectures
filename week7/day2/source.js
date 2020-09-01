// example without using setstate
// grow plant
// component you click on a button and it grows a plant


// example with using set state but mutating  the data
// plant list

// component you can click a plant and add it to a list (emoji options adds to array)



// show some immutable patterns

// add
const state = {stuff}
const new = {...stuff, b: 'new'}



// obj remove

const state = {stuff}
const copy = Object.assign({}, state)
delete copy.thing

//or

const {thing, ...new} = state;




// array add

const state = [];
const new = [...state, newElement]

// or

const state = [];
const cpy = state.slice(0);
cpy.push(thing);

// array remove

const state = []
const new = state.slice(0);
//pop shift splice
new.splice(#,1)

//or

const state = [];

const new = state.filter(elem => elem === 'remove');


// bigger example showing immutable patterns

import React, { useState, useEffect } from "react";

const seedLookup = {
  "⌾": "🌱",
  ".": "🌿",
  o: "🌷",
  "0": "🍀",
  "@": "🌵",
  "*": "🌴"
};

const useGarden = () => {
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

  return (
    // show seeds
    // show garden
  );
};

export default useGarden;

