import createClient from "openapi-fetch";
import type { paths } from "../generated/dtype";

const API_URL = "http://localhost:8000";
export const MEDIA_URL = `${API_URL}/cis/media/data`;
export const API = createClient<paths>({ baseUrl: API_URL });
