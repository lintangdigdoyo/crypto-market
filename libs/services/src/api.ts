import axios from "axios";

export default axios.create({
  baseURL: "https://api.pintu.co.id/v2",
  headers: {
    "Content-Type": "application/json",
  },
});
