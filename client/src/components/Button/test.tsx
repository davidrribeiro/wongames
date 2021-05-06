import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button />)

    expect(screen.getByRole('heading', { name: /Button/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    )

    expect(screen.getByRule('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
