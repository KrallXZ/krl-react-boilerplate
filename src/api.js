import axios from 'axios'
axios.defaults.baseURL = ''

export const api = {
  loadItems() {
    return ["item1", "item2"]
  }
}