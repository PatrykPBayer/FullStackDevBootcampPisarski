const form = document.querySelector("#converter");
//umieszczamy tutaj aby pobrac przed wypełnienem pola i mieć potem bz odpytywania api w pamieci
const resultText = document.getElementById("result");
const errorText = document.getElementById("converterError");
const submitButton = document.getElementById("submitButton");

form.addEventListener("submit", (event) => {
  event.preventDefault(); //blokuje przeładowanie strony

  submitButton.disabled = true;
  //czyszczenie kowty i błędy na początku
  errorText.textContent = "";

  const amount = Number(event.target.amount.value.trim()); //amount to jest parametr z name dla inputa id="admount"
  //trim jako ekstra zabezpiecznie przed białymi spacjami
  const currency = event.target.currency.value;

  //fetch("https://api.nbp.pl/api/exchangerates/rates/A/" + currency)   //podajemy łączenie ciagu api ze zmienną z wybranej waluty
  fetch(`https://api.nbp.pl/api/exchangerates/rates/A/${currency}`) //inna metoda, używam backtick (tylda) i podajemy paramter
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject();
    })
    .then((data) => {
      //zabezpieczenie gdy rates jhest puste
      if (data.rates?.length > 0 && data.rates[0].mid) {
        const rate = data.rates[0].mid;
        //tu dla odmiany (tylko dla przykłądu) używamy getelementbyid
        const result = (amount * rate).toFixed(2);

        resultText.textContent = `${result} PLN`;
        submitButton.disabled = false;
      }
    })
    .catch(() => {
      errorText.textContent = "Błąd";
    })
    .finally(() => {
      submitButton.disabled = false;
    });
});
