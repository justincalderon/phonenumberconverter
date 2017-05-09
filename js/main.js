function formatPhone() {
  var phoneInput = document.getElementById("phoneInput").value
  var regExPhone = /^[0-9{3}]+[0-9{3}]+[0-9]{4}$/
  console.log(regExPhone.test(phoneInput));
}

document.getElementById("inputBtn").addEventListener("click", formatPhone)
