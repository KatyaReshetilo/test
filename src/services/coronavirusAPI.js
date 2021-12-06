export default function covidSummary() {
  return fetch("https://api.covid19api.com/summary").then((res) => res.json());
}
