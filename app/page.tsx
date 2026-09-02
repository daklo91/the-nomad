"use client";

import { useState } from "react";

import FilterForm, {
  type FilterValues,
} from "@/app/components/filter-form";
import {
  placeholderPlaces,
  type Place,
} from "@/app/data/placeholder-places";

export default function Home() {
  const [filteredPlaceList, setFilteredPlaceList] = useState<Place[] | null>(
    null,
  );

  function onFilterPlaces(filterValues: FilterValues) {
    const filteredPlaces = placeholderPlaces.filter((place) => {
      const matchesPlaceType = place.type === filterValues.placeType;
      const matchesMaxTravelMinutes =
        place.travelMinutes <= filterValues.maxTravelMinutes;
      const matchesTravelMethod =
        place.travelMethod === filterValues.travelMethod;
      const matchesQuiet =
        filterValues.needsQuiet === (place.quietRating >= 4);
      const matchesPower =
        filterValues.needsPower === place.powerAvailable;

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

  function clearFilteredPlaces() {
    setFilteredPlaceList(null);
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
    filterResult = renderPlaces(placeholderPlaces);
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
        <FilterForm
          onFilter={onFilterPlaces}
          onClear={clearFilteredPlaces}
        />
        <ul>{filterResult}</ul>
      </main>
    </div>
  );
}
