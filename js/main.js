function formatPhone() {
  var phoneInput = document.getElementById("phoneInput").value
  var regExPhone = /\(?\d{3}[-.)]\d{3}[-.]\d{4}/;
  console.log(regExPhone.test(phoneInput));
}

document.getElementById("inputBtn").addEventListener("click", formatPhone)


// [\w]+@\w+\.(net|com|edu)
