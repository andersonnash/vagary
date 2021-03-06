import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const media = {
  desktop: `@media screen and (max-width: 600px)`
}

const Section = styled.section`
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
background: #131313;
`;

const Container = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
height: 100vh;
padding: 3rem calc((100vw - 1300px) /2);

}

`;

const ColumnLeft = styled.div`
display: flex;
color: #fff;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 5rem 2rem;


p {
  margin: 2rem 0;
  font-size: 4rem;
  line-height: 1.1;
  @media screen and (max-width: 600px) {
    font-size: 15px;
  }
}
`;


const Button = styled(motion.button)`
padding: 1rem 3rem;
font-size: 1rem;
border: 2px solid #fff;
border-radius: 4px;
outline: none;
cursor: pointer;
color: white;
background: transparent;
`;

const Image = styled(motion.img)`
position: absolute;
width: 100%;
height: 100%;
// height: 30px;
max-width: 350px;
max-height: 350px;

`;

const ColumnRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 2rem;
position: relative;

@media screen and (max-width: 768px) {
  grid-template-columns: 1fr;
}

${Image}:nth-child(1) {
  bottom: 65px;
  left: 250px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    bottom: 370px;
    left: 270px;
  }
}
${Image}:nth-child(2) {
  bottom: 65px;
  left: 320px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    bottom: 270px;
    left: 270px;
  }
}
${Image}:nth-child(3) {
  bottom: 65px;
  left: 390px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    bottom: 170px;
    left: 270px;
  }
}
${Image}:nth-child(4) {
  bottom: 65px;
  left: 460px;
  border-radius: 50%;

  @media screen and (max-width: 600px) {
    bottom: 70px;
    left: 270px;
  }
}
`;

const ImgSlide = () => {
  const motionLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: {opacity: 1, x: 0}
  }
  return (
    <div className="min-h-screen">
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            
            >
            Welcome to the Vagary
          </motion.h1
          
          
          >
          <motion.p
            variants={motionLeft}
            initial='hidden'
            animate='visible'
            transition={{duration: 4}}
          
          >Destinations... Travel... Destinations...</motion.p>
          <Link to="/sign-up"><Button
          whileTap={{scale: 1}}
          whileHover={{scale: 1.2}}
          
          >Sign Up</Button></Link>
          <Link to="/sign-in"><Button
            whileTap={{ scale: 1 }}
            whileHover={{scale: 1.2}}
          >
            Sign In</Button></Link>
          <ColumnRight>
            <Image src={'https://i.imgur.com/F3nr777.png'} alt="images"
              drag={true}
            />
            <Image src={'https://image.freepik.com/free-vector/air-plane-icon-illustration_138676-278.jpg'} alt="images"
              drag={true} />
            <Image src={'https://img.freepik.com/free-vector/flat-hotel-building-background_23-2148152507.jpg?size=338&ext=jpg&ga=GA1.2.2099647507.1627689600'} alt="images"
              drag={true} />
            <Image src={'https://img.freepik.com/free-vector/earth-globe-design_1053-479.jpg?size=338&ext=jpg'} alt="images"
              drag={true} />
          </ColumnRight>
        </ColumnLeft>
      </Container>
    </Section>
    </div>
  )
}

export default ImgSlide
