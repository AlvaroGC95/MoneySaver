import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/auth-context';
import { getUserProfile, getExpensesById, getSavingsGoalById, getSavingsGoals } from '../services/api-service';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

function Profile() {
  const { user } = useAuthContext();
  const [profileData, setProfileData] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [savingsGoals, setSavingsGoals] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { onLogout } = useAuthContext();

  useEffect(() => {
    const userId = user?.id || user;

    if (!user) {
      setLoading(false);
      return;
    }

    Promise.all([
      getUserProfile(userId),
      getExpensesById(userId),
      getSavingsGoalById(userId),
    ])
      .then(([profileData, expensesData, savingsGoalsData, incomesData]) => {
        setProfileData(profileData);
        setExpenses(expensesData);
        setSavingsGoals(savingsGoalsData);
        setIncomes(incomesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [user]);

  if (loading) {
    return <div>Loading profile...</div>;
  }

  const handleLogout = () => {
    onLogout();
  };

  return (
    <div className="container-xl mt-5">
    <h1 className="text-center mb-4">User Profile</h1>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Profile Details</Card.Title>
          <Card.Text>Name: {user.name}</Card.Text>
          <Card.Text>Email: {user.email}</Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Expense Details</Card.Title>
          {expenses.length > 0 ? (
            <ul className="list-group">
              {expenses.map((expense) => (
                <li key={expense.id} className="list-group-item">
                  <Card.Text>
                    Expense Description: {expense.description}, Amount: {expense.amount}
                  </Card.Text>
                </li>
              ))}
            </ul>
          ) : (
            <Card.Text>No expenses to display.</Card.Text>
          )}
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Income Details</Card.Title>
          {incomes.length > 0 ? (
            <ul className="list-group">
              {incomes.map((income) => (
                <li key={income.id} className="list-group-item">
                  <Card.Text>
                    Income Description: {income.description}, Amount: {income.amount}
                  </Card.Text>
                </li>
              ))}
            </ul>
          ) : (
            <Card.Text>No incomes to display.</Card.Text>
          )}
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>SavingGoal Details</Card.Title>
          {incomes.length > 0 ? (
            <ul className="list-group">
              {incomes.map((income) => (
                <li key={income.id} className="list-group-item">
                  <Card.Text>
                    SavingGoal Description: {savingsGoals.description}
                  </Card.Text>
                </li>
              ))}
            </ul>
          ) : (
            <Card.Text>No incomes to display.</Card.Text>
          )}
        </Card.Body>
      </Card>

      <Link to="/savingGoal" className="btn btn-primary mr-2">
        SavingsGoal
      </Link>
      <Link to="/expense" className="btn btn-primary mr-2">
        Expense
      </Link>
      <Link to="/income" className="btn btn-primary mr-2">
        Income
      </Link>
      <div className="m-2"></div>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Profile;
