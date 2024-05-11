//import { Outlet, useNavigation } from 'react-router-dom';

import Header from '../components/header/Header';
import { Outlet,} from 'react-router-dom';


function Root() {
  //const navigation = useNavigation();

  return (
    <>
      <Header/>
      <main>
       <Outlet />
      </main>
    </>
  );
}

export default Root;
