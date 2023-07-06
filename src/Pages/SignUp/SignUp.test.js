import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import SignUp from './SignUp';

jest.mock('axios');

describe('SignUp', () => {
  beforeEach(() => {
    axios.post.mockResolvedValue({ status: 201 });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form inputs and button', () => {
    render(<SignUp />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('submits the form data when the button is clicked', async () => {
    render(<SignUp />);

    const userNameInput = screen.getByLabelText('Username');
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('Sign Up');

    fireEvent.change(userNameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    expect(axios.post).toHaveBeenCalledWith(
      'http://127.0.0.1:8000/user/signup/',
      {
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'testpassword',
      }
    );

    // Wait for the axios request to complete
    await screen.findByText('User registered!');

    expect(screen.getByText('User registered!')).toBeInTheDocument();
    expect(window.location.pathname).toEqual('/signin');
  });

  it('displays error messages when the form is submitted with invalid data', async () => {
    axios.post.mockRejectedValue({
      response: {
        status: 400,
        data: {
          email: ['Enter a valid email address.'],
          password: ['This field is required.'],
        },
      },
    });

    render(<SignUp />);

    const submitButton = screen.getByText('Sign Up');

    fireEvent.click(submitButton);

    // Wait for the axios request to complete
    await screen.findByText('Enter a valid email address.');
    await screen.findByText('This field is required.');

    expect(screen.getByText('Enter a valid email address.')).toBeInTheDocument();
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });
});