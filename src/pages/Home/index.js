import React from 'react';
import {
  Header,
  Hero,
  MostPicked,
  Categories,
  Testimoni,
  Footer
} from '../../components';
import homeData from '../../json/landingPage.json';

const Home = (props) => { 

  const refMostPicked = React.createRef();

  return (
      <>  
        <Header {...props}/>
        <Hero refMostPicked={refMostPicked} data={homeData.hero}/>
        <MostPicked refMostPicked={refMostPicked} data={homeData.mostPicked}/>
        {
          homeData.categories.map((item, i) => (
            <Categories data={item} key={`category-${i}`}/>
          ))
        }
        <Testimoni data={homeData.testimonial}/>
        <Footer/>
      </>
  )
};

export default Home;
