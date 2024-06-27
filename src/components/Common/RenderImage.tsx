
function RenderImage({ classOfDiv, classOfImage, imageName }) {
  return (
    <>
      <div className={classOfDiv}>
        <img src={imageName} className={`${classOfImage}`} alt='' />
        {classOfDiv == "i-product-box" ? (
          <div className='overlay'>
            <i
              className='fa-brands fa-instagram'
              style={{ color: "white", zIndex:1, fontSize : "1.2rem"}}
            ></i>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default RenderImage;
