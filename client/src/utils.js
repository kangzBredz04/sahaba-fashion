async function send(endpoint, method, body, header = "application/json") {
  const response = await fetch(`http://localhost:3000${endpoint}`, {
    method,
    credentials: "include",
    headers: {
      "Content-Type": header,
    },
    body: JSON.stringify(body),
  });
  console.log(header);
  const data = await (method === "GET" ? response.json() : response.json());
  return data;
}

export const api = {
  get: (endpoint) => send(endpoint, "GET"),
  post: (endpoint, body) => send(endpoint, "POST", body),
  put: (endpoint, body) => send(endpoint, "PUT", body),
  delete: (endpoint) => send(endpoint, "DELETE"),
};
