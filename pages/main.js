function generateTable() {
    let firstName = document.getElementById("first-name").value;
    let lastName = document.getElementById("last-name").value;
    let birthYear = document.getElementById("birth-year").value;
    let sex = document.querySelector('input[name="sex"]:checked').value;
    let city = document.getElementById("city").value;
    let address = document.getElementById("address").value;


    let languages = [];
    let checkboxes = document.querySelectorAll('input[name="condition_type"]:checked').value;

    for (let i = 0; i < checkboxes.length; i++) {
        languages.push(checkboxes[i].value);
    }

    let tableData = "<table><tr><th>Ім`я</th><th>Прізвище</th><th>Рік народження</th><th>Стать</th><th>Місто</th><th>Адреса</th><th>Мови, якими володіє користувач</th>"
    tableData += "<tr><td>" + firstName + "</td><td>" + lastName + "</td><td>" + birthYear + "</td><td>" + sex + "</td><td>" + city + "</td><td>" + address + "</td><td>" + languages.join(", ") + "</td></tr>";
    tableData += "</table>";

    document.getElementById("table-container").innerHTML = tableData;
}