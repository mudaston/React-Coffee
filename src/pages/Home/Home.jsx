import { Link } from 'react-router-dom'

import { theme } from '../../common'

import { FirstScreen } from './FirstScreen'
import { About } from './About'
import { Best } from './Best'
import { Beans, BestItem, HeadingPlusBeans } from '../../components/elements'
import { Button } from '../../components/controls'

import img1 from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import img3 from '../../assets/img/3.jpg'

const Home = () => {
  return (
    <>
      <FirstScreen>
        <div className='wrapper'>
          <h1>Everything You Love About Coffee</h1>
          <Beans shadow color={theme.colors.mainColorBackground} />
          <p>We makes every day full of energy and taste</p>
          <p className='text-subheading'>Want to try our beans?</p>
          <Link to='/our-coffee'>
            <Button padding='.4rem 3.5rem' border borderRadius='.18rem' color='#ffffff'>
              More
            </Button>
          </Link>
        </div>
      </FirstScreen>
      <About>
        <HeadingPlusBeans text='About Us' color={theme.colors.mainColorText} />
        <p>
          Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. Afraid
          at highly months do things on at. Situation recommend objection do intention so questions.
          As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want.
          Children me laughing we prospect answered followed. At it went is song that held help
          face.
          <br />
          <br />
          Now residence dash woods she excellent you. Shade being under his bed her, Much read on as
          draw. Blessing for ignorant exercise any yourself unpacked. Pleasant horrible but confined
          day end marriage. Eagerness furniture set preserved far recommend. Did even but nor are
          most gave hope. Secure active living depend son repair day ladies now.
        </p>
      </About>
      <Best>
        <p className='heading'>Our best</p>
        <div className='wrapper'>
          <BestItem img={img1} alt='Some coffee' price={10.73} descr='Solimo Coffee Beans 2 kg' />
          <BestItem img={img2} alt='Some coffee' price={10.73} descr='Solimo Coffee Beans 2 kg' />
          <BestItem img={img3} alt='Some coffee' price={10.73} descr='Solimo Coffee Beans 2 kg' />
        </div>
      </Best>
    </>
  )
}

export default Home
