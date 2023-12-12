// JavaScript code to handle form submission and table update
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var address = document.getElementById("address").value;
    var pincode = document.getElementById("pincode").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var food = Array.from(document.querySelectorAll('input[name="food"]:checked')).map(function(element) {
      return element.value;
    });
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;

    // Append values to table
    var table = document.getElementById("myTable").getElementsByTagName("tbody")[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);
    cell1.innerHTML = firstName;
    cell2.innerHTML = lastName;
    cell3.innerHTML = address;
    cell4.innerHTML = pincode;
    cell5.innerHTML = gender;
    cell6.innerHTML = food.join(", ");
    cell7.innerHTML = state;
    cell8.innerHTML = country;

    // Clear form fields
    document.getElementById("myForm").reset();
  });