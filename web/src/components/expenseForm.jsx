import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';

const ExpenseForm = ({ onSubmit, expenseToEdit }) => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [categories, setCategories] = useState([]);

  // Puedes obtener las categorías de tu servicio/api
  useEffect(() => {
    // Aquí obtienes las categorías y las estableces en el estado
    // Ejemplo ficticio, reemplázalo con la lógica de tu aplicación
    const fetchedCategories = ['Comida', 'Transporte', 'Entretenimiento'];
    setCategories(fetchedCategories);
  }, []);

  // Si hay un gasto para editar, establece sus valores en el formulario
  useEffect(() => {
    if (expenseToEdit) {
      setValue('description', expenseToEdit.description);
      setValue('amount', expenseToEdit.amount);
      setValue('date', expenseToEdit.date);
      setValue('category', expenseToEdit.category);
    }
  }, [expenseToEdit, setValue]);

  const handleFormSubmit = (data) => {
    // Envía los datos del formulario al componente padre
    onSubmit(data);
    // Limpia el formulario después de enviar
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Form.Group controlId="description">
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese la descripción"
          {...register('description', { required: 'Este campo es obligatorio' })}
        />
        {errors.description && <Form.Text className="text-danger">{errors.description.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="amount">
        <Form.Label>Cantidad</Form.Label>
        <Form.Control
          type="number"
          placeholder="Ingrese la cantidad"
          {...register('amount', { required: 'Este campo es obligatorio', min: 0 })}
        />
        {errors.amount && <Form.Text className="text-danger">{errors.amount.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="date">
        <Form.Label>Fecha</Form.Label>
        <Form.Control
          type="date"
          {...register('date', { required: 'Este campo es obligatorio' })}
        />
        {errors.date && <Form.Text className="text-danger">{errors.date.message}</Form.Text>}
      </Form.Group>

      <Form.Group controlId="category">
        <Form.Label>Categoría</Form.Label>
        <Form.Control as="select" {...register('category', { required: 'Seleccione una categoría' })}>
          <option value="">Seleccione...</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Control>
        {errors.category && <Form.Text className="text-danger">{errors.category.message}</Form.Text>}
      </Form.Group>

      <Button variant="primary" type="submit">
        Guardar
      </Button>
    </Form>
  );
};

export default ExpenseForm;
