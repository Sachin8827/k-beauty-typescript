import Slider from "react-slick";
import { ImageProp } from "../../Types/Types";
import RenderImage from "../Common/RenderImage";

const SimpleSlider: React.FC<{ data: ImageProp[] }> = ({ data }) => {
  const settings = {
    customPaging: function (i: number) {
      return (
        <a style={{ width: "100%", height: "100%", aspectRatio: 0.68, display: "block" }}>
          <img
            src={`/images/${data[i].image}`}
            style={{ width: "100%", imageRendering: "pixelated", height: '100%', objectFit: 'contain' }}
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <div key={index}>
          <RenderImage
            classOfDiv='pr-img-box'
            classOfImage={"pr-img"}
            imageName={`/images/${item.image}`}
          />
        </div>
      ))}
    </Slider>
  );
}
export default SimpleSlider;
