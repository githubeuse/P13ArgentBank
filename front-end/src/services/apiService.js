const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:3001";

// Fonction pour envoyer une requête POST à l'API pour se connecter
// utilisé dans signInSlice

export const SignIn = async (email, password) => {
  try {
    // from swagger
    // host: localhost:3001
    // basePath: /api/v1
    // paths:  /user/login:
    const response = await fetch(`${API_BASE_URL}/api/v1/user/login`, {
      // envoie req POST à l'api
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }), // email et mdp envoyés dans le corps de la req
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error logging in");
    }
    const data = await response.json();
    return data; // si la réponse est correcte on retourne les données
  } catch (error) {
    console.error("Error logging in", error);
    throw error;
  }
};

// new ci dessous
export const fetchUserProfile = async (token) => {
  console.log("token:", token);
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/user/profile`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to fetch profile");
    }
    const data = await response.json();
    console.log("data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching user profile", error.message);
    throw error;
  }
};
