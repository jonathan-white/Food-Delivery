import axios from 'axios';

export default {
  getLocations: () => axios.get("/api/locations")
}
