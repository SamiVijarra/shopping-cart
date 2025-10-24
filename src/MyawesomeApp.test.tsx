import { describe, expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyAwesomeApp } from './MyAwesomeApp';

describe('MyAwesomeApp', () => {
  test('should render fistName and lastName', () => {
    const { container} = render( <MyAwesomeApp />)

    const h1 = container.querySelector('h1');
    expect(h1?.innerHTML).toContain('Samanta'); 

    const h3 = container.querySelector('h3');
    expect(h3?.innerHTML).toContain('Vijarra'); 
  });

  test('should render fistName and lastName - screen', () => {
  render( <MyAwesomeApp />)
    
  screen.debug();

  /*const h1 = screen.getByRole('heading', {
    level: 1
  });*/
  const h1 = screen.getByTestId('first-name-title');

  expect(h1.innerHTML).toContain('Samanta');
  });
  

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('div-app')).toMatchSnapshot();
  });
});


  