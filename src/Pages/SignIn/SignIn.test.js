import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SignIn from './SignIn';

describe('SignIn', () => {
  beforeEach(() => {
    // Mock localStorage methods
    const localStorageMock = {
      getItem: jest.fn(),
      setItem: jest.fn(),
      clear: jest.fn()
    };
    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form inputs and button', () => {
    render(<SignIn />);
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('LogIn')).toBeInTheDocument();
    expect(screen.getByText('SIGN UP')).toBeInTheDocument();
  });

  it('submits the form data when the button is clicked', async () => {
    render(<SignIn />);

    const userNameInput = screen.getByLabelText('Username');
    const passwordInput = screen.getByLabelText('Password');
    const submitButton = screen.getByText('LogIn');

    fireEvent.change(userNameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    fireEvent.click(submitButton);

    expect(fetch).toHaveBeenCalledWith(
      'http://127.0.0.1:8000/user/login/',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: 'testuser',
          password: 'testpassword',
        }),
      }
    );

    // Wait for the fetch request to complete
    await screen.findByText('LogIn');

    expect(localStorage.setItem).toHaveBeenCalledTimes(2);
    expect(window.location.href).toEqual('/');
  });

  it('displays error messages when the form is submitted with invalid data', async () => {
    const errorResponse = {
      status: 401,
      text: () =>
        Promise.resolve(
          JSON.stringify({
            username: ['This field is required.'],
            password: ['This field is required.'],
          })
        ),
    };

    // Mock the fetch method to return an error response
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({}),
        ...errorResponse,
      })
    );

    render(<SignIn />);

    const submitButton = screen.getByText('LogIn');

    fireEvent.click(submitButton);

    // Wait for the fetch request to complete
    await screen.findByText('Your email or password is incorrect!');

    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(screen.getByText('Your email or password is incorrect!')).toBeInTheDocument();
    expect(screen.getByText('This field is required.')).toBeInTheDocument();
  });
});