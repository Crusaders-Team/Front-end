import React from 'react';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import HomePage from './HomePage';

jest.mock('axios');

describe('HomePage', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [] });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the Navbar component', () => {
    render(<HomePage />);
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
  });

  it('renders the Header component', () => {
    render(<HomePage />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  it('fetches videos data from the server and renders the VideoCard components', async () => {
    const videoData = [
      {
        id: '1',
        uploadTime: '2022-01-01T00:00:00.000Z',
        title: 'First video',
        description: 'This is the first video',
        url: 'https://www.youtube.com/watch?v=123',
        tag: 'Tag1'
      },
      {
        id: '2',
        uploadTime: '2022-01-02T00:00:00.000Z',
        title: 'Second video',
        description: 'This is the second video',
        url: 'https://www.youtube.com/watch?v=456',
        tag: 'Tag2'
      }
    ];

    axios.get.mockResolvedValue({ data: videoData });

    render(<HomePage />);

    // Wait for the axios request to complete and the component to re-render
    await screen.findByTestId('videos-container');

    // Check that the VideoCard components are rendered with the correct props
    expect(screen.getByText('First video')).toBeInTheDocument();
    expect(screen.getByText('This is the first video')).toBeInTheDocument();
    expect(screen.getByText('https://www.youtube.com/watch?v=123')).toBeInTheDocument();
    expect(screen.getByText('Tag1')).toBeInTheDocument();

    expect(screen.getByText('Second video')).toBeInTheDocument();
    expect(screen.getByText('This is the second video')).toBeInTheDocument();
    expect(screen.getByText('https://www.youtube.com/watch?v=456')).toBeInTheDocument();
    expect(screen.getByText('Tag2')).toBeInTheDocument();
  });
}); 