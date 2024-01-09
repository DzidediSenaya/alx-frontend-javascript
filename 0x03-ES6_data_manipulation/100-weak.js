const MAX_REQUESTS = 5;

// Create a WeakMap to track the number of requests for each endpoint.
const requestCounts = new WeakMap();

// Export a const instance of WeakMap named weakMap.
export const weakMap = requestCounts;

// Export a new function named queryAPI.
export function queryAPI(endpoint) {
  // Get the current count for the endpoint from the WeakMap.
  const count = requestCounts.get(endpoint) || 0;

  // Increment the count for the endpoint.
  requestCounts.set(endpoint, count + 1);

  // Check if the count exceeds or equals the maximum allowed requests.
  if (count >= MAX_REQUESTS) {
    throw new Error('Endpoint load is high');
  }
}
