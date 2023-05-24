// api/api.ts
import axios from "axios";

const client = axios.create({
    baseURL: "https://templaterun-api.elympics.cc/api/v1/",
});

export default client;
