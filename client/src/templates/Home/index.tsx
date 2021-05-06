import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import BannerSlider from 'components/BannerSlider'
import GameCardSlider from 'components/GameCardSlider'

import { Container} from 'components/Container'
import Menu from 'components/Menu'
import Heading from 'components/Heading'
import Footer from 'components/Footer'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeGamesHighlight: HighlightProps

}

import * as S from './styles'

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeGamesHighlight
 }: HomeTemplateProps)  => (
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color='black'>News</Heading>
        <GameCardSlider items={newGames} />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">Most Popular</Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} color="white" />
      </S.SectionMostPopular>
    </Container>

    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">Upcomming</Heading>
        <GameCardSlider items={upcommingGames} color="white" />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} color="white" />
      </Container>
    </S.SectionUpcoming>

    <Container>
      <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary" color="white">Free Games</Heading>
          <Highlight {...freeGamesHighlight} />
          <GameCardSlider items={freeGames} color="white" />
      </S.SectionFreeGames>
    </Container>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)

export default Home
