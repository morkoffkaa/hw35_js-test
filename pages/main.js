document.querySelector(".login_form").addEventListener("submit", generateTable);

function generateTable(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  const birthYear = document.getElementById("birth-year").value;
  const sex = document.querySelector('input[name="sex"]:checked').value;

  const city = document.getElementById("city").value;
  const address = document.getElementById("address").value;

  const languages = [];

  console.log([firstName, lastName, city, sex, birthYear, address, languages]);

  const languageCheckboxes = Array.from(document.getElementsByName("language"));

  for (let i = 0; i < languageCheckboxes.length; i++) {
    if (languageCheckboxes[i].checked) {
      languages.push(languageCheckboxes[i].value);
    }
  }

  const table = document.createElement("table");

  table.innerHTML = (`<tr>
      <td>
      Ім'я:
      </td>
      <td>
      ${firstName}
      </td>
      </tr> 
      <tr>
      <td>
      Прізвище:
      </td>
      <td>
      ${lastName}
      </td>
      </tr>
      <tr>
      <td>
      Рік народження:
      </td>
      <td>
      ${birthYear}
      </td>
      </tr>
      <tr>
      <td>
      Стать:
      </td>
      <td>
      ${sex}
      </td>
      </tr>
      <tr>
      <td>
      Місто:
      </td>
      <td>
      ${city}
      </td>
      </tr>
      <tr>
      <td>
      Адреса:
      </td>
      <td>
      ${address}
      </td>
      </tr>
      <tr>
      <td>
      Мови, якими володієте:
      </td>
      <td>
      ${languages}
      </td>
      </tr>`);
  
      document.getElementById("table-container").append(table);
    }