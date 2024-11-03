const baseURL = "https://pblog-server.onrender.com";

export const useFetch = async function (path, requests) {
  try {
    let options;

    if (requests.method !== "GET") {
      options = {
        method: requests.method,
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requests.body),
      };
    } else {
      options = {
        method: "GET",
        headers: { Authorization: `Bearer ${requests.token}` },
      };
    }

    const request = new Request(baseURL.concat(path), options);

    const response = await fetch(request);
    return response;
  } catch (error) {
    console.error(error.message);
  }
};
