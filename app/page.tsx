export default function Home() {
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
  ];

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>Welcome, Nomad!</h1>
        <p>Pick a place for today:</p>
        <ul>
          {places.map((place) => (
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
          ))}
        </ul>
      </main>
    </div>
  );
}
