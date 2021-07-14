import axios from "axios";

import { server_url } from "./config";

export const getNav = async (signal) => {

    const nav = await axios.get(`${server_url}/api/links`)

};
