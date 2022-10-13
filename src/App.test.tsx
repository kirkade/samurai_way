import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

let dialogs = [
  {id: 1, name: 'Dimych'},
  {id: 2, name: 'Sasha'},
  {id: 3, name: 'Victor'},
  {id: 4, name: 'Anastasia'},
  {id: 5, name: 'Olga'},
]

let messages = [
  {id: 1, message: 'Whatsup'},
  {id: 2, message: 'Hey?'},
  {id: 3, message: 'Yo?'},
]

let posts = [
  {id: 1, message: 'Hi, how are you?'},
  {id: 2, message: 'My first post'},
]


test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
