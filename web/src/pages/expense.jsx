import React, { useState } from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import ExpenseForm from '../components/expenseForm';
import ExpenseList from '../components/expenseList';
import ExpenseItem from '../components/expenseItem'; 

const ExpensePage = () => {
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  const handleExpenseSubmit = (expenseData) => {

    console.log('Expense submitted:', expenseData);

    setExpenseToEdit(null);
  };

  const handleExpenseEdit = (expense) => {
    setExpenseToEdit(expense);
  };

  const handleExpenseDelete = (expenseId) => {

    console.log('Expense deleted:', expenseId);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={112}>
          <Card>
            <Card.Body>
              <h2 className="card-title mb-4">{expenseToEdit ? 'Editar Gasto' : 'Registrar Nuevo Gasto'}</h2>
              <ExpenseForm onSubmit={handleExpenseSubmit} expenseToEdit={expenseToEdit} />
            </Card.Body>
          </Card>
        </Col>
        
      </Row>
    </Container>
  );
};

export default ExpensePage;