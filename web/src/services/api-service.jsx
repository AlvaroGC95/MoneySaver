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
      localStorage.removeItem("user");
      window.location.assign("/login");
    } else {
      return Promise.reject(error);
    }
  }
);

// Usuarios
export function createUser(data) {
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

  export function getSavingsGoalById (id)  {
      return api.get(`/savings-goals/${id}`)
  };

  export function updateSavingsGoal (id, data) {
      return api.put(`/savings-goals/${id}`, data)
  };

  export function deleteSavingsGoal  (id)  {
      return api.delete(`/savings-goals/${id}`)
  };
  //Expense
  export function createExpense (data){
      return api.post('/expense', data)
  };
  export function getExpenseById (id){
    return api.get(`/expense/ ${id}`)
  };
  export function updateExpense (id, data){
    return api.put(`/expense/${id}`, data)
  };
  export function deleteExpense (id){
    return api.delete(`/expense/${id}`)
  };
  export function getExpensesByCategory(){
    return api.get ('/expense')
  };

  //Expense Category
  export function createExpenseCategories (data){
    return api.post('/expense-category', data)
};
  export function getExpenseCategoryforyById (id){
    return api.get(`/expense-category/ ${id}`)
};
  export function updateExpenseCategory (id, data){
    return api.put(`/expense-category/${id}`, data)
};
  export function deleteExpenseCategory (id){
    return api.delete(`/expense-category/${id}`)
};
export function getExpensesCategory(){
  return api.get ('/expense-category')
};