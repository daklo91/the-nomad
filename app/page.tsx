"use client";

import { useState } from "react";

export default function Home() {
  const [placeType, setPlaceType] = useState("cafe");
  const [maxTravelMinutes, setMaxTravelMinutes] = useState(30);
  const [travelMethod, setTravelMethod] = useState("walking");
  const [needsQuiet, setNeedsQuiet] = useState(false);
  const [needsPower, setNeedsPower] = useState(false);
  const [filteredPlaceList, setFilteredPlaceList] = useState<Place[] | null>(
    null,
  );

  type Place = {
    id: string;
    name: string;
    type: "cafe" | "library" | "outdoor" | "add new ...";
    travelMinutes: number;
    travelMethod: "walking" | "bus" | "train" | "add new ...";
    quietRating: 1 | 2 | 3 | 4 | 5;
    powerAvailable: boolean;
  };

  const places: Place[] = [
    {
      id: "123213ojpjdasda",
      name: "Kolbotn Espresso House",
      type: "cafe",
      travelMinutes: 30,
      travelMethod: "walking",
      quietRating: 2,
      powerAvailable: true,
    },
    {
      id: "pidoaskd098721",
      name: "Kolben Bibliotek",
      type: "library",
      travelMinutes: 30,
      travelMethod: "walking",
      quietRating: 4,
      powerAvailable: true,
    },
    {
      id: "pidoaskd123098721",
      name: "Sæter Cafe",
      type: "cafe",
      travelMinutes: 15,
      travelMethod: "bus",
      quietRating: 2,
      powerAvailable: false,
    },
    {
      id: "pidoaskd0kj98721",
      name: "Lambertseter Bibliotek",
      type: "library",
      travelMinutes: 20,
      travelMethod: "bus",
      quietRating: 4,
      powerAvailable: true,
    },
  ];

  function onFilterPlaces(event: React.SubmitEvent) {
    event.preventDefault();
    console.log("placeType: " + placeType);
    console.log("maxTravelMinutes: " + maxTravelMinutes);
    console.log("needsQuiet: " + needsQuiet);
    console.log("needsPower: " + needsPower);

    const filterPlaces = places.filter((place) => {
      return place.powerAvailable === needsPower;
    });

    console.log(filterPlaces);

    setFilteredPlaceList(filterPlaces);
  }

  function renderPlaces(placeList: Place[]) {
    return placeList.map((place) => (
      <li key={place.id}>
        <p>
          <b>ID: </b>
          {place.id}
        </p>
        <p>
          <b>Name: </b>
          {place.name}
        </p>
        <p>
          <b>Type: </b>
          {place.type}
        </p>
        <p>
          <b>Quiet Rating: </b>
          {place.quietRating}/5
        </p>
        <p>
          <b>Travel Method: </b>
          {place.travelMethod}
        </p>
        <p>
          <b>Travel Minutes: </b>
          {place.travelMinutes}
        </p>
        <p>
          <b>Power Avalable: </b>
          {place.powerAvailable ? "true" : "false"}
        </p>
      </li>
    ));
  }

  let filterResult;

  if (filteredPlaceList === null) {
    filterResult = renderPlaces(places);
  }

  if (filteredPlaceList !== null && filteredPlaceList.length > 0) {
    filterResult = renderPlaces(filteredPlaceList);
  }

  if (filteredPlaceList !== null && filteredPlaceList.length === 0) {
    filterResult = <p>No matches for filter</p>;
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome!</h1>
        <p>Pick a place for today:</p>
        <form onSubmit={onFilterPlaces}>
          <label htmlFor="quietCheckbox">Quiet</label>
          <input
            defaultChecked={needsQuiet}
            name="quietCheckbox"
            id="quietCheckbox"
            type="checkbox"
            onChange={(e) => setNeedsQuiet(e.target.checked)}
          />
          <label htmlFor="powerCheckbox">Power</label>
          <input
            defaultChecked={needsPower}
            name="powerCheckbox"
            id="powerCheckbox"
            type="checkbox"
            onChange={(e) => setNeedsPower(e.target.checked)}
          />
          {/* TODO: Koble dette sammen med hva som er i typescript */}
          <label htmlFor="typeDropdown">Choose type of place:</label>
          <select
            defaultValue={placeType}
            name="typeDropdown"
            id="typeDropdown"
            onChange={(e) => setPlaceType(e.target.value)}
          >
            <option value="cafe">Cafe</option>
            <option value="library">Library</option>
            <option value="outside">Outside</option>
            <option value="addNew">Add new ...</option>
          </select>
          <label htmlFor="travelMethodDropdown">Choose travel method:</label>
          <select
            defaultValue={travelMethod}
            name="travelMethodDropdown"
            id="travelMethodDropdown"
            onChange={(e) => setTravelMethod(e.target.value)}
          >
            <option value="walking">Walking</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="addNew">Add new ...</option>
          </select>
          <label htmlFor="maxTravelTimeInput">
            Maximum travel time in minutes
          </label>
          <input
            name="maxTravelTimeInput"
            id="maxTravelTimeInput"
            type="number"
            defaultValue={maxTravelMinutes}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => setMaxTravelMinutes(+e.target.value)}
          />
          <input type="submit" value="Find places" />
        </form>
        <ul>{filterResult}</ul>
      </main>
    </div>
  );
}
