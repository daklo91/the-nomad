export const placeTypeOptions = [
  { value: "cafe", label: "Cafe" },
  { value: "library", label: "Library" },
  { value: "outdoor", label: "Outside" },
] as const;

export type PlaceType = (typeof placeTypeOptions)[number]["value"];

export const travelMethodOptions = [
  { value: "walking", label: "Walking" },
  { value: "bus", label: "Bus" },
  { value: "train", label: "Train" },
] as const;

export type TravelMethod = (typeof travelMethodOptions)[number]["value"];
