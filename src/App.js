import { React, useState, useEffect } from "react";
import Filter from "./components/filter/Filter";
import CountryTable from "./components/countryTable/counryTable";
import covidSummary from "./services/coronavirusAPI";
import Modal from "./components/modal/modal";
import Container from "./components/container/container";

function App() {
  const [countries, setCountries] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [countryCovid, setCountryCovid] = useState("");
  useEffect(() => {
    covidSummary().then((stat) => setCountries(stat.Countries));
  }, []);

  const toggleModal = () => {
    setShowModal((s) => !s);
  };
  const openModal = (country) => {
    setCountryCovid(country);
    toggleModal();
  };
  const doFilter = (event) => {
    setFilter(event.currentTarget.value);
  };
  const countryStat = (countryCovid) => {
    const normalize = countryCovid.toLocaleLowerCase();
    return countries.find(
      (country) => country.Country.toLocaleLowerCase() === normalize
    );
  };
  const getVisibleCountries = () => {
    const normalize = filter.toLocaleLowerCase();
    return countries.filter((countries) =>
      countries.Country.toLocaleLowerCase().includes(normalize)
    );
  };
  return (
    <Container>
      <Filter value={filter} onChange={doFilter} />
      <CountryTable countries={getVisibleCountries()} openModal={openModal} />
      {showModal && (
        <Modal onClose={toggleModal} country={countryStat(countryCovid)} />
      )}
    </Container>
  );
}

export default App;
