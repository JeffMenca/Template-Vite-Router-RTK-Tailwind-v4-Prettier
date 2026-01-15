/**
 * Custom HTTP error class for handling API errors
 * @property {number} status - HTTP status code
 * @property {unknown} data - Response data from the failed request
 */
export class HttpError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data: unknown) {
    super(message);
    this.name = "HttpError";
    this.status = status;
    this.data = data;
  }
}

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

type RequestOptions = {
  method?: HttpMethod;
  body?: unknown;
  headers?: Record<string, string>;
  signal?: AbortSignal;
};

/**
 * Get the base API URL from environment variables
 * @returns {string} Base URL for API requests
 */
function baseUrl() {
  return import.meta.env.VITE_API_URL ?? "";
}

async function request<T>(path: string, options: RequestOptions = {}): Promise<T> {
  const url = path.startsWith("http") ? path : `${baseUrl()}${path}`;

  const res = await fetch(url, {
    method: options.method ?? "GET",
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...(options.headers ?? {}),
    },
    body: options.body === undefined ? undefined : JSON.stringify(options.body),
    signal: options.signal,
  });

  const contentType = res.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json") ? await res.json() : await res.text();

  if (!res.ok) {
    const message =
      typeof data === "string"
        ? data || "Request failed"
        : (data as Record<string, unknown>)?.message?.toString() || "Request failed";
    throw new HttpError(message, res.status, data);
  }

  return data as T;
}

/**
 * HTTP client with typed methods for common REST operations
 * All methods return a Promise with the typed response
 * @example
 * const users = await http.get<User[]>('/api/users');
 * const newUser = await http.post<User>('/api/users', { name: 'John' });
 */
export const http = {
  get<T>(url: string, signal?: AbortSignal) {
    return request<T>(url, { method: "GET", signal });
  },
  post<T>(url: string, body?: unknown) {
    return request<T>(url, { method: "POST", body });
  },
  put<T>(url: string, body?: unknown) {
    return request<T>(url, { method: "PUT", body });
  },
  patch<T>(url: string, body?: unknown) {
    return request<T>(url, { method: "PATCH", body });
  },
  del<T>(url: string) {
    return request<T>(url, { method: "DELETE" });
  },
};
