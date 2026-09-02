"use client";

import { useState } from "react";

const defaultFilterValues = {
  placeType: "cafe",
  maxTravelMinutes: 120,
  travelMethod: "walking",
  needsQuiet: false,
  needsPower: false,
  filteredPlaceList: null,
};

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
  {
    id: "place-005",
    name: "Fjordgløtt Kafé",
    type: "cafe",
    travelMinutes: 10,
    travelMethod: "walking",
    quietRating: 4,
    powerAvailable: false,
  },
  {
    id: "place-006",
    name: "Sentrum Study Hall",
    type: "library",
    travelMinutes: 25,
    travelMethod: "train",
    quietRating: 5,
    powerAvailable: true,
  },
  {
    id: "place-007",
    name: "Parkpaviljongen",
    type: "outdoor",
    travelMinutes: 12,
    travelMethod: "walking",
    quietRating: 3,
    powerAvailable: false,
  },
  {
    id: "place-008",
    name: "Nordstasjonen Kafé",
    type: "cafe",
    travelMinutes: 20,
    travelMethod: "train",
    quietRating: 1,
    powerAvailable: true,
  },
  {
    id: "place-009",
    name: "Elvebredden Bibliotek",
    type: "library",
    travelMinutes: 35,
    travelMethod: "bus",
    quietRating: 5,
    powerAvailable: true,
  },
  {
    id: "place-010",
    name: "Hagekontoret",
    type: "outdoor",
    travelMinutes: 15,
    travelMethod: "bus",
    quietRating: 4,
    powerAvailable: false,
  },
  {
    id: "place-011",
    name: "Hjørnet Kaffebar",
    type: "cafe",
    travelMinutes: 25,
    travelMethod: "bus",
    quietRating: 3,
    powerAvailable: true,
  },
  {
    id: "place-012",
    name: "Utsikten Bibliotek",
    type: "library",
    travelMinutes: 40,
    travelMethod: "walking",
    quietRating: 5,
    powerAvailable: false,
  },
  {
    id: "place-013",
    name: "Perrongen Kafé",
    type: "cafe",
    travelMinutes: 45,
    travelMethod: "train",
    quietRating: 2,
    powerAvailable: false,
  },
  {
    id: "place-014",
    name: "Skogly Arbeidsplass",
    type: "outdoor",
    travelMinutes: 20,
    travelMethod: "walking",
    quietRating: 4,
    powerAvailable: false,
  },
];

export default function Home() {
  const [placeType, setPlaceType] = useState(defaultFilterValues.placeType);
  const [maxTravelMinutes, setMaxTravelMinutes] = useState(
    defaultFilterValues.maxTravelMinutes,
  );
  const [travelMethod, setTravelMethod] = useState(
    defaultFilterValues.travelMethod,
  );
  const [needsQuiet, setNeedsQuiet] = useState(defaultFilterValues.needsQuiet);
  const [needsPower, setNeedsPower] = useState(defaultFilterValues.needsPower);
  const [filteredPlaceList, setFilteredPlaceList] = useState<Place[] | null>(
    defaultFilterValues.filteredPlaceList,
  );

  function onFilterPlaces(event: React.SubmitEvent) {
    event.preventDefault();

    const filteredPlaces = places.filter((place) => {
      const matchesPlaceType = place.type === placeType;
      const matchesMaxTravelMinutes = place.travelMinutes <= maxTravelMinutes;
      const matchesTravelMethod = place.travelMethod === travelMethod;
      // TODO: Dette fungerer slik at det er enten eller. Senere må vi gi en tredje option, som er "ignorer option" eller "enten eller"
      const matchesQuiet = needsQuiet === place.quietRating >= 4;
      const matchesPower = needsPower === place.powerAvailable;

      return (
        matchesPlaceType &&
        matchesMaxTravelMinutes &&
        matchesTravelMethod &&
        matchesQuiet &&
        matchesPower
      );
    });

    setFilteredPlaceList(filteredPlaces);
  }

  function clearFilterAndResetList() {
    setPlaceType(defaultFilterValues.placeType);
    setMaxTravelMinutes(defaultFilterValues.maxTravelMinutes);
    setTravelMethod(defaultFilterValues.travelMethod);
    setNeedsQuiet(defaultFilterValues.needsQuiet);
    setNeedsPower(defaultFilterValues.needsPower);
    setFilteredPlaceList(defaultFilterValues.filteredPlaceList);
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
            checked={needsQuiet}
            name="quietCheckbox"
            id="quietCheckbox"
            type="checkbox"
            onChange={(e) => setNeedsQuiet(e.target.checked)}
          />
          <label htmlFor="powerCheckbox">Power</label>
          <input
            checked={needsPower}
            name="powerCheckbox"
            id="powerCheckbox"
            type="checkbox"
            onChange={(e) => setNeedsPower(e.target.checked)}
          />
          {/* TODO : Koble dette sammen med hva som er i typescript */}
          <label htmlFor="typeDropdown">Choose type of place:</label>
          <select
            value={placeType}
            name="typeDropdown"
            id="typeDropdown"
            onChange={(e) => setPlaceType(e.target.value)}
          >
            <option value="cafe">Cafe</option>
            <option value="library">Library</option>
            <option value="outdoor">Outside</option>
            <option value="add new ...">Add new ...</option>
          </select>
          <label htmlFor="travelMethodDropdown">Choose travel method:</label>
          <select
            value={travelMethod}
            name="travelMethodDropdown"
            id="travelMethodDropdown"
            onChange={(e) => setTravelMethod(e.target.value)}
          >
            <option value="walking">Walking</option>
            <option value="bus">Bus</option>
            <option value="train">Train</option>
            <option value="add new ...">Add new ...</option>
          </select>
          {/* TODO: Skru default travel time til mye mer, eller gi evne til å skru av å søke på traveltime.
              Grunnen til dette er UX. Hvis brukeren ikke tenker på å søke med traveltime, så burde han/hun ikke trenge å justere på det.
          */}
          <label htmlFor="maxTravelTimeInput">
            Maximum travel time in minutes
          </label>
          <input
            name="maxTravelTimeInput"
            id="maxTravelTimeInput"
            type="number"
            value={maxTravelMinutes}
            onKeyDown={(e) => {
              if (["e", "E", "+", "-"].includes(e.key)) {
                e.preventDefault();
              }
            }}
            onChange={(e) => setMaxTravelMinutes(+e.target.value)}
          />
          <input type="submit" value="Find places" />
        </form>
        <button type="button" onClick={clearFilterAndResetList}>
          Clear filter
        </button>
        <ul>{filterResult}</ul>
      </main>
    </div>
  );
}
