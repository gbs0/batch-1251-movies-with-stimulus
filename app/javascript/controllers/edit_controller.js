import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="edit"
export default class extends Controller {
  static targets = ["form", "card"]

  connect() {
  }

  displayForm() {
    this.formTarget.classList.toggle("d-none")
  }

  update(event) {
    const card = event.target
    event.preventDefault()
    const url = this.formTarget.action
    fetch(url, {
      headers: { "Accept": "text/plain"},
      method: "PATCH",
      body: new FormData(this.formTarget)
    })
    .then(response => response.text())
    .then(data => 
      this.cardTarget.outerHTML = data
    )
  }
}
