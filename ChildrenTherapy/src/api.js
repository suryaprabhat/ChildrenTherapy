const API_URL = "http://localhost:5000/api"; // Backend URL

export const fetchData = async () => {
  try {
    const response = await fetch(`${API_URL}/users`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
