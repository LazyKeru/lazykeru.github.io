import '../stylesheet/Common.css'; // CSS for the app
import '../stylesheet/Home.css'; // CSS for the app

import Contact from '../components/home/Contact';
import GeneralInfo from '../components/home/GeneralInfo';
import Header from '../components/home/Header';

function Home() {
  return (
    <div className="body">
        <div className='top'>
            <div>
                {/* GeneralInfo */}
                <GeneralInfo/>
            </div>
            <div>
                {/* Profile pic */}
                <Header/>
            </div>
        </div>
        <div className='bottom'>
            {/* Contact me */}
            <Contact/>
        </div>
    </div>
  );
}

export default Home;
