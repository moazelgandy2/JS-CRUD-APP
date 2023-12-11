const productName = document.getElementById("productName");

const productPrice = document.getElementById("productPrice");

const productDesc = document.getElementById("productDesc");

const table = document.getElementById("tbody");

let products = localStorage.getItem("products") || "";

var product;

window.onload = function () {
  table.innerHTML = products;
};

function validateInput(input, minLength) {
  input.addEventListener("input", function () {
    if (input.value.length >= minLength) {
      input.classList.remove("is-invalid");

      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");

      input.classList.add("is-invalid");
    }
  });
}

validateInput(productName, 3);

validateInput(productPrice, 1);

validateInput(productDesc, 5);

function areAllInputsValid() {
  return (
    productName.classList.contains("is-valid") &&
    productPrice.classList.contains("is-valid") &&
    productDesc.classList.contains("is-valid")
  );
}

function store() {
  if (areAllInputsValid()) {
    const product = `<tr>
      <td>${productName.value}</td>
      <td>${productPrice.value}</td>
      <td>${productDesc.value}</td>
      <td><button class='btn btn-sm btn-danger'>Delete</button></td>
      <td><button class='btn btn-sm btn-info'>Update</button></td>
    </tr>`;

    products += product;

    table.innerHTML = products;

    localStorage.setItem("products", products);
  } else {
    window.alert("Please fill in all fields correctly.");
  }
}
