import "../assets/styles/Blog.css";
import testimonials from '../utils/constant/testmonialData'
function Blog() {

  return (
    <>
      <section className="blogs-home">
        <div className='container'>
          <div className='blogs'>
            <h6>READ NOW</h6>
            <h4>ON THE KULT BLOG</h4>
            <div className="testimonials">
              {testimonials.map((item, index) => <div className="blog-card" key={index}>
                <div className="blog-img">
                  <img src={'images/'+item.image} />
                </div>
                <div className="blog-content">
                  <h6>{item.heading}</h6>
                  <p>{item.content}</p>
                  <a href="">Read more</a>
                </div>
              </div>)}
            </div>
            <div className='viewAllProduct'>
              <button>View All Product</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Blog;
