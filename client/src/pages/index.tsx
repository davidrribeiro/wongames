import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesdMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export function getServerSideProps() {
  //const res = fetch('');


  return {
    props: {
      banners: bannersMock,
      newGames: gamesdMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesdMock,
      upcommingGames: gamesdMock, 
      upcommingHighlight: highlightMock,
      upcommingMoreGames: gamesdMock,
      freeGames: gamesdMock,
      freeGamesHighlight: highlightMock
    }
  }
}
