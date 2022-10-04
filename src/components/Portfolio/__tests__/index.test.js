// __tests__/Gallery.test.js
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
const portrait = { name: "portraits", description: "Portraits of people in my life" };


afterEach(cleanup)

describe('Gallery component', () => {

  it('renders', () => {
    render(<Gallery currentNav={portrait} />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Gallery currentNav={portrait} />)
    expect(asFragment()).toMatchSnapshot()
  })
});

it('displays text', () => {
  const { getByTestId } = render(<Gallery currentNav={portrait} />)
  expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
})