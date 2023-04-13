document.getElementById("saveBtn").addEventListener("click", generateTable);

function generateTable() {
 let firstName = document.getElementById("first-name").value;
 let lastName = document.getElementById("last-name").value;
 let birthYear = document.getElementById("birth-year").value;
 let sex = document.querySelector('input[name="sex"]:checked').value;
 let city = document.getElementById("city").value;
 let address = document.getElementById("address").value;
 let languages = [];
 let languageCheckboxes = document.getElementsByName("language");
  for (var i = 0; i < languageCheckboxes.length; i++) {
    if (languageCheckboxes[i].checked) {
      languages.push(languageCheckboxes[i].value);
    }
  }

  
  let table = document.createElement("table");
  table.innerHTML = "<tr><td>Ім'я:</td><td>" + firstName + "</td></tr>" +
    "<tr><td>Прізвище:</td><td>" + lastName + "</td></tr>" +
    "<tr><td>Дата народження:</td><td>" + birthYear + "</td></tr>" +
    "<tr><td>Стать:</td><td>" + sex + "</td></tr>" +
    "<tr><td>Місто:</td><td>" + city + "</td></tr>" +
    "<tr><td>Адреса:</td><td>" + address + "</td></tr>" +
    "<tr><td>Мови, якими володіє:</td><td>" + languages.join(", ") + "</td></tr>";

  
  let tableContainer = document.getElementById("table-container");
  tableContainer.innerHTML = "";
  tableContainer.appendChild(table);
}
