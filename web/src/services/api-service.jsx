import axios from "axios";

const api = axios.create({
  withCredentials: true,
  baseURL: import.meta.env.REACT_APP_BASE_API_URL || "http://localhost:3000/v1",
});
api.interceptors.response.use(
  response => response.data,
  error => {
    console.log("Interceptor de error Axios activado", error);
    if (error.response && error.response.status === 401 && window.location.pathname !== "/login") {
      console.log("Redirigiendo a /login debido a error 401");

      // Obtener la cadena de datos del usuario desde localStorage
      const userDataString = localStorage.getItem("user");

      // Verificar si la cadena de datos no es nula ni indefinida
      if (userDataString !== null && userDataString !== undefined) {
        try {
          // Intentar analizar los datos del usuario
          const userData = JSON.parse(userDataString);

          // Ahora puedes utilizar userData en tu lógica
          console.log("Datos del usuario:", userData);
        } catch (error) {
          // Manejar el caso en que los datos no son JSON válido
          console.error("Error al analizar los datos del usuario:", error);
        }
      } else {
        // Manejar el caso en que "user" no existe en localStorage
        console.log("No se encontraron datos de usuario en localStorage");
      }

      localStorage.removeItem("user");
      window.location.assign("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

// Usuarios
export function registerUser(data) {
  const formData = new FormData();

  Object.keys(data).forEach(key => {
    if (key === 'avatar' && data.avatar) {
      formData.append("avatar", data.avatar[0]);
    } else {
      formData.append(key, data[key]);
    }
  });

  return api.post("/register", formData);
}

export function login(data) {
  return api.post("/login", data);
}

export function getUserProfile() {
  return api.get("/profile");
}

export function logoutUser() {
  return api.post("/logout");
}
  //SavingsGoal
  export function createSavingsGoal (data)  {
    return api.post('/savings-goals', data)
  };

  export function getSavingsGoals ()  {
      return api.get('/savings-goals')
  };

  export function getSavingsGoalById (userId)  {
      return api.get(`/savings-goals/${userId}`)
  };

  export function updateSavingsGoal (userId, data) {
      return api.put(`/savings-goals/${userId}`, data)
  };

  export function deleteSavingsGoal  (userId)  {
      return api.delete(`/savings-goals/${userId}`)
  };
  //Expense
  export function createExpenses (data){
      return api.post('/expenses', data)
  };
  export function getExpensesById (UserId){
    return api.get(`/expenses/ ${UserId}`)
  };
  export function updateExpenses (UserId, data){
    return api.put(`/expenses/${UserId}`, data)
  };
  export function deleteExpenses (userId){
    return api.delete(`/expenses/${userId}`)
  };
  export function getExpensesByCategory(){
    return api.get ('/expenses')
  };

  //Expense Category
  export function createExpenseCategories (data){
    return api.post('/expense-category', data)
};
  export function getExpenseCategoryforyById (userId){
    return api.get(`/expense-category/${userId}`)
};
  export function updateExpenseCategory (userId, data){
    return api.put(`/expense-category/${userId}`, data)
};
  export function deleteExpenseCategory (userId){
    return api.delete(`/expense-category/${userId}`)
};
export function getExpensesCategory(){
  return api.get ('/expense-category')
};

//Incomes
export function createIncomes (data){
  return api.post ('/income', data)
}
export function getIncomes (){
  return api.get ('/income')
}