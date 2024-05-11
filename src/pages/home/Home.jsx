import './home.css';
import Welcome from '../../components/welcome/Welcome';
import saly from '../../../public/Saly-14.png';
import Login from '../../components/login/Login';


function HomePage() {
  return (
    <>
    <div className="home">
      <div className="home_main">
        <div className="home_main_welcome">
        <Welcome />
        <div className="home_main_image">
        <img src={saly} alt="saly-14" />
        </div>
        </div>


     <Login/>

    </div>
    </div>
    </>
  );
}

export default HomePage;

