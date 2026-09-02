import type { PlaceType, TravelMethod } from "./place-options";

export type Place = {
  id: string;
  name: string;
  type: PlaceType;
  travelMinutes: number;
  travelMethod: TravelMethod;
  quietRating: 1 | 2 | 3 | 4 | 5;
  powerAvailable: boolean;
};

export const placeholderPlaces: Place[] = [
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
