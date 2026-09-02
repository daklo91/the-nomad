# TODO

## Dynamiske filtervalg

<!-- ! Rett og slett, bare legg til en option som heter "add new" når man lager en "place" i fremtiden.
! Det er mulig vi dermed må la Typescript bare godta en array of strings, ikke noen strings med fast navn.
 -->

- [ ] Når en bruker kan opprette et sted med en ny stedstype eller reisemåte, skal det nye valget automatisk dukke opp i filteret.
- [ ] Bestem om filtervalgene skal utledes fra unike verdier i lagrede steder, eller om stedstyper og reisemåter skal lagres som egne kategorier.
- [ ] Legg til en egen handling for å opprette nye verdier. `Add new ...` skal ikke være en `PlaceType` eller `TravelMethod`, fordi det er en handling og ikke en verdi som beskriver et sted.

TypeScript-typer finnes ikke mens appen kjører. Hvis brukere senere skal kunne opprette helt nye kategorier, må kategoriene derfor lagres som data. De statiske option-arrayene er én felles kilde for JSX og TypeScript fram til denne funksjonaliteten finnes.

## Filtertilstander

<!-- ! De 2 under her gjelder alt. Alle filter options. Alle filter options skal ha mulighet for å la stå, uten at dem påvirker filteret. -->

- [ ] Gi stillhet og strøm en tredje tilstand som betyr "ignorer dette filteret" eller "begge deler". Nå betyr valgene enten stille/bråkete og med/uten strøm.
- [ ] La brukeren ignorere maksimal reisetid. En bruker som ikke bryr seg om reisetid, bør ikke måtte justere feltet for å unngå at steder filtreres bort.

## Fullført

- [x] Koble options i dropdownene til de samme verdiene som brukes av TypeScript-typene.
