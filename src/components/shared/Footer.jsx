import footerLogo from '../../assets/logo-xl.png';
import instagramIcon from '../../assets/instagram.png';
import facebookIcon from '../../assets/facebook.png';
import twiterIcon from '../../assets/twitter.png';

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] pb-7.5 pt-20 px-4 text-white space-y-10">
      <div  className="max-w-277.5 mx-auto text-center space-y-10">
        <div>
          <img 
            src={footerLogo} 
            alt="brand logo" 
            className='mx-auto max-w-60 sm:max-w-70 md:max-w-80 lg:max-w-90'
          />

          <p className='pb-6 pt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

          <div className='space-y-4'>
            <h4 className='font-medium text-xl'>Social Links</h4>

            <div className='flex items-center justify-center gap-3'>
              <img src={instagramIcon} alt="instagram icon" />
              <img src={facebookIcon} alt="facebook icon" />
              <img src={twiterIcon} alt="twiter icon" />
            </div>
          </div>
        </div>

        <div className='border-t border-t-white flex flex-col md:flex-row items-center justify-between gap-5 pt-7.5'>
          <span>© 2026 KeenKeeper. All rights reserved.</span>

          <div className='flex items-center gap-5'>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Cookies</span>
          </div>
        </div>
      </div> 
    </footer>
  );
};

export default Footer;