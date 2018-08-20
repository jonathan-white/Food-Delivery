import axios from 'axios';

export default {
  getLocations: () => axios.get("/api/locations"),
  getLocation: (id) => axios.get(`/api/locations/${id}`),
  getCategoryItems: () => axios.get("/api/menu-categories/"),
  getMenuItem: (id) => axios.get(`/api/menu-items/${id}`)
}
