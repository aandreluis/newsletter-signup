const signUp = document.querySelector("#signUp")
const success = document.querySelector("#success")
const confirmationEmail = document.querySelector("#confirmation-email")
const form = document.forms.subscribeForm
const { email, btnSubmit } = form

email.addEventListener("keyup", validateEmail)

form.addEventListener("submit", (e) => {
  e.preventDefault()
  if (validateEmail) {
    email.disabled = true
    btnSubmit.disabled = true
    btnSubmit.lastElementChild.classList.toggle("hidden")

    signUp.classList.add("hidden")
    signUp.classList.remove("flex", "md:grid")

    confirmationEmail.innerText = email.value
    success.classList.add("flex")
    success.classList.remove("hidden")
  }
})

const emailRegex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)

function validateEmail() {
  if (!emailRegex.test(email.value)) {
    email.setCustomValidity("Required input")
    btnSubmit.disabled = true
    return false
  } else {
    email.setCustomValidity("")
    btnSubmit.disabled = false
    return true
  }
}
