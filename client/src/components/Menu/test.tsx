import { render, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the heading', () => {
    const { container } = render(<Menu />)

    expect(screen.getByRole('heading', { name: /Menu/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should handle the open menu', () => {
    renderWithTheme(<Menu />)

    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })
})
