import Anchor from '../Component/Anchor';
import slack from '../Images/slack.png';
import github from '../Images/Icon.png';
import logo from '../Images/Zuri.Internship_Logo.png';
import i4g from '../Images/I4G.png';

const Home = () => {
    return(
        <div className="App">
      <div>
        <img 
          src='https://res.cloudinary.com/chiaka/image/upload/v1665640492/lcze3y1s6lrdldnfkx5x.jpg'
          alt="osuji profile"
          id='profile__img'
          className='profile__img'
          />
      </div>

      <div>
      <h3
      id="twitter"
      >
      @NewtonChiaka
      </h3>
      </div>

      <div id='slack'>Big.cj</div>

      <div className='anchorContainer'>
        <Anchor
          links='https://training.zuri.team/'
          title='Zuri Store'
          subtext=''
          id='btn__zuri'
        />

        <Anchor
          links=' http://books.zuri.team'
          title='Zuri Books'
          subtext='Click here to get the best and in demand coding and design books.'
          id='books'
        />

        <Anchor
          links='https://books.zuri.team/python-for-beginners?ref_id=<osuji chiaka>'
          title='Python Books'
          subtext='Take your Python skill from beginner to Advanced Level.'
          id='book_python'
        />

        <Anchor
          links='https://background.zuri.team'
          title='Background Check for Coders'
          subtext='Click here to know more about your favourite Coders.'
          id='pitch'
        />

        <Anchor
          links='https://books.zuri.team/design-rules'
          title='Design Books'
          subtext='Learn to design like a Pro, with free books from Zuri store'
          id='book_design'
        />

        <Anchor
          links='/contact'
          title='Contact Me'
          subtext=''
          id='contact'
        />
      </div>

      <div className='slack_github'>
        <img 
        src={slack}
        alt='slack describtion'
        className='slackImg'
        />
        <img
        src={github}
        alt='github description'
        />
      </div>

      <div className='footer'>
        <img
        src={logo}
        alt='zuri log'
        className='zuriLogo'
        />

        <div className='task'>
        HNG Internship 9 Frontend Task
        </div>

        <img 
        src={i4g}
        alt='ingressive logo'
        className='i4gLogo'
        />

      </div>
    </div>
    )
}

export default Home;