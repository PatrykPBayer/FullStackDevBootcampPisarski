//configurujemy zmienne
const select = document.createElement("select");
const getCurrenciesURL = "https://api.frankfurter.app/latest";

const showError = () => {
  const errorMessage = document.createElement("p");
  errorMessage.textContent = "There is some error, try again later.";
  document.body.appendChild(errorMessage); // show error to user
};

fetch(getCurrenciesURL)
  .then((response) => {
    if (!response.ok) {
      // stsatus is other than 2xx
      return Promise.reject(); // go to block "catch"
    }
    return response.json();
  })
  .then((data) => {
    if (!data.rates) {
      // we should check if we have correct data from external API
      showError();
    }

    //pobiermay klucze z obiektu currencies
    const currencies = Object.keys(data.rates);
    //sprawdzenie co nam zwraca currencis
    console.log(currencies);

    //iterujemy po tablicy currencies pętlą forEach
    currencies.forEach((currency) => {
      const option = document.createElement("option");
      option.text = currency; // text user can see on list
      option.value = currency; // value we should to send to back-end
      select.appendChild(option); //dodajemy wartosć do naszego select
    });

    document.body.appendChild(select);
  })
  .catch(() => {
    showError();
  });
