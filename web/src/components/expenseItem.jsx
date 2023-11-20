import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ExpenseItem = ({ expense, onEdit, onDelete }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{expense.description}</Card.Title>
        <Card.Text>
          <strong>Cantidad:</strong> ${expense.amount} <br />
          <strong>Fecha:</strong> {new Date(expense.date).toLocaleDateString()} <br />
          <strong>Categoría:</strong> {expense.category}
        </Card.Text>
        <div className="d-flex justify-content-end">
          <Button variant="info" className="me-2" onClick={() => onEdit(expense)}>
            Editar
          </Button>
          <Button variant="danger" onClick={() => onDelete(expense._id)}>
            Eliminar
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ExpenseItem;
