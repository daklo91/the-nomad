"use client";

import { useState } from "react";

import {
  placeTypeOptions,
  type PlaceType,
  travelMethodOptions,
  type TravelMethod,
} from "@/app/data/place-options";

export type FilterValues = {
  placeType: PlaceType;
  maxTravelMinutes: number;
  travelMethod: TravelMethod;
  needsQuiet: boolean;
  needsPower: boolean;
};

type FilterFormProps = {
  onFilter: (filterValues: FilterValues) => void;
  onClear: () => void;
};

const defaultFilterValues: FilterValues = {
  placeType: placeTypeOptions[0].value,
  maxTravelMinutes: 120,
  travelMethod: travelMethodOptions[0].value,
  needsQuiet: false,
  needsPower: false,
};

export default function FilterForm({ onFilter, onClear }: FilterFormProps) {
  const [placeType, setPlaceType] = useState<PlaceType>(
    defaultFilterValues.placeType,
  );
  const [maxTravelMinutes, setMaxTravelMinutes] = useState(
    defaultFilterValues.maxTravelMinutes,
  );
  const [travelMethod, setTravelMethod] = useState<TravelMethod>(
    defaultFilterValues.travelMethod,
  );
  const [needsQuiet, setNeedsQuiet] = useState(defaultFilterValues.needsQuiet);
  const [needsPower, setNeedsPower] = useState(defaultFilterValues.needsPower);

  function onSubmitFilter(event: React.SubmitEvent) {
    event.preventDefault();

    onFilter({
      placeType,
      maxTravelMinutes,
      travelMethod,
      needsQuiet,
      needsPower,
    });
  }

  function clearFilterAndResetForm() {
    setPlaceType(defaultFilterValues.placeType);
    setMaxTravelMinutes(defaultFilterValues.maxTravelMinutes);
    setTravelMethod(defaultFilterValues.travelMethod);
    setNeedsQuiet(defaultFilterValues.needsQuiet);
    setNeedsPower(defaultFilterValues.needsPower);
    onClear();
  }

  return (
    <>
      <form onSubmit={onSubmitFilter}>
        <label htmlFor="quietCheckbox">Quiet</label>
        <input
          checked={needsQuiet}
          name="quietCheckbox"
          id="quietCheckbox"
          type="checkbox"
          onChange={(event) => setNeedsQuiet(event.target.checked)}
        />
        <label htmlFor="powerCheckbox">Power</label>
        <input
          checked={needsPower}
          name="powerCheckbox"
          id="powerCheckbox"
          type="checkbox"
          onChange={(event) => setNeedsPower(event.target.checked)}
        />
        <label htmlFor="typeDropdown">Choose type of place:</label>
        <select
          value={placeType}
          name="typeDropdown"
          id="typeDropdown"
          onChange={(event) => setPlaceType(event.target.value as PlaceType)}
        >
          {placeTypeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor="travelMethodDropdown">Choose travel method:</label>
        <select
          value={travelMethod}
          name="travelMethodDropdown"
          id="travelMethodDropdown"
          onChange={(event) =>
            setTravelMethod(event.target.value as TravelMethod)
          }
        >
          {travelMethodOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <label htmlFor="maxTravelTimeInput">
          Maximum travel time in minutes
        </label>
        <input
          name="maxTravelTimeInput"
          id="maxTravelTimeInput"
          type="number"
          value={maxTravelMinutes}
          onKeyDown={(event) => {
            if (["e", "E", "+", "-"].includes(event.key)) {
              event.preventDefault();
            }
          }}
          onChange={(event) => setMaxTravelMinutes(+event.target.value)}
        />
        <input type="submit" value="Find places" />
      </form>
      <button type="button" onClick={clearFilterAndResetForm}>
        Clear filter
      </button>
    </>
  );
}
