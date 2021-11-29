import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { Link, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, Button, Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap';
import { CrudContext } from '../context/CrudState';

export const AddUser = () => {
  const [name, setName] = useState('');
  const { addUser } = useContext(CrudContext);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: uuid(),
      name,
    };
    addUser(newUser);
    history.push('/');
  };

  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <Navbar color="dark" dark>
      <Container>
        <Form onSubmit={onSubmit}>
          <FormGroup>
            <Label>Name</Label>
            <Input type="text" value={name} onChange={onChange} name="name" placeholder="Enter user" required />
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Form>
      </Container>
    </Navbar>
  );
};
