import React from 'react';
import './Home.scss';
import HomeSect1 from '../../components/HomeSect/HomeSect1';
import HomeSect2 from '../../components/HomeSect/HomeSect2';
import HomeSect3 from '../../components/HomeSect/HomeSect3';
import HomeSect4 from '../../components/HomeSect/HomeSect4';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function Home() {
  return (
  <>
   <HelmetProvider>
      <Helmet>
        <title>Home Page</title> 
      </Helmet>
  </HelmetProvider>

 <div className="homee">
 <HomeSect1></HomeSect1>
  <HomeSect2></HomeSect2>
  <HomeSect4></HomeSect4>
  <HomeSect3></HomeSect3>
 </div>
  

  </>
  
  )
}

export default Home