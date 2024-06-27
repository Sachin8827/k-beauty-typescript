import data from '../utils/constants/data'
import '../assets/styles/Social-media.css'
const SocialMedia: React.FC = () => {
    return <>
        <section>
            <div className="container">
                <div className="socalmedia">
                    <h6>FOLLOW OUR JOURNEY</h6>
                    <h5>@KBEAUTYARABIA</h5>
                    <div className="social-media-container">
                        {data.map((product, index) => <div className="social-media-card" key={index}>
                            <img src={'images/' + product.image} />
                            <div className='overlay'>
                                <i
                                    className='fa-brands fa-instagram'
                                    style={{ color: "white", zIndex: 1, fontSize: "1.2rem" }}
                                ></i>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </section>
    </>
}
export default SocialMedia;