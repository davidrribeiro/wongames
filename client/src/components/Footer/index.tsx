import Link from 'next/link'
import Logo from 'components/Logo'
import Heading from 'components/Heading'
import * as S from './styles'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>

        <a href="mailto:sac@wongame.com">sac@wongame.com</a>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-label="social media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>

          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>

          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Youtube
          </a>

          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-label="footer resources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit</span>
        <span>Lorem ipsum </span>
        <span>Lorem ipsum dolor sit</span>
      </S.Column>
    </S.Content>
    <S.Copyright>Won Games 2020 &copy; All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
