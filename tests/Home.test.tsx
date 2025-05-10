import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders content', () => {
    render(<Home />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument(); // adjust to match your page content
  });
});
