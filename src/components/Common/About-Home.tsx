import Content from "../Content";
import image from "/images/image.png";
import image2 from "/images/image2nd.png";
import "../../assets/styles/About-home.css";
function AboutHome() {
  return (
    <>
      <section className="about-home">
      
        <div className='about-content'>
          <div className='row'>
            <div className='content-box'>
              <Content
                heading='INSTREE'
                subHeading='SUN PROTECTION MADE SIMPLE'
                text='Isntree’s range of broad spectrum sun protection products are lightweight and suitable for daily use. Not only do they help control skin shine, but also keep skin feeling cool and comfortable. These suncreens also contain hyaluronic acid which helps deliver deep hydration and strengthen the skin’s moisture barrier. Available in a variety of formulations to suit every skin type. '
                buttonValue='Find Out More'
              />
            </div>
            <div className='about-image'>
              <img src={image} />
            </div>
          </div>

          <div className='row'>
            <div className='content-box'>
              <Content
                heading='HARUHARU WONDER'
                classname={"order4"}
                subHeading='FOR THAT ‘GLOW FROM WITHIN’'
                text='Wondering how to achieve that radiant, healthy looking  ‘glass skin’? Say hello to HaruHaru Wonder’s popular Black Rice Hyaluronic Toner. A multi-purpose essence and toner that uses a patented Ultra Deep Technology to deliver skin nourishing ingredients within the skin’s layers to reveal deeply hydrated skin and nourished skin. Bonus- It is Vegan, cruelty free and contains 95% natural ingredients! '
                buttonValue='Find Out More'
              />
              </div>
              <div className='about-image'>
                <img src={image2} />
              </div>
            </div>
          
        </div>

      </section>
    </>
  );
}
export default AboutHome;
