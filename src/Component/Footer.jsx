import logo from '../Images/Zuri.Internship_Logo.png';
import i4g from '../Images/I4G.png';

const Footer = () => {
    return(
        <div>
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

export default Footer;