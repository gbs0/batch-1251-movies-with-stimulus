import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="search"
export default class extends Controller {
  static targets = ["form", "input", "list"]

  connect() {
   console.log("Div Inteira:", this.element)
   console.log("Form:", this.formTarget.action)
   console.log("Input:", this.inputTarget)
   console.log("Lista de Resultados:", this.listTarget)
  }

  find(event) {
    const query = event.target.value
    const url = `${this.formTarget.action}?query=${query}`
    fetch(url, {headers: { "Accept": "text/plain" }})
    .then(response => response.text())
    .then(data => 
      this.listTarget.outerHTML = data)
  }
}
