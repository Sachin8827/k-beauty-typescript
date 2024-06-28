
import "../../assets/styles/Footer.css";
const Footer: React.FC = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='footer'>
            <div className='footer-about'>
              <h5>ABOUT THE SHOP</h5>
              <p>
                Auguste The Label is a boutique Australianbrand dreamt up by
                Byron Bay nativeEbony Eagles.
              </p>

              <div className='social-media-icons'>
                <a href=''>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='insta'
                  >
                    <path
                      d='M17 2.00049H7C4.23858 2.00049 2 4.23906 2 7.00049V17.0005C2 19.7619 4.23858 22.0005 7 22.0005H17C19.7614 22.0005 22 19.7619 22 17.0005V7.00049C22 4.23906 19.7614 2.00049 17 2.00049Z'
                      stroke='var(--content-color)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M16 11.3705C16.1234 12.2028 15.9813 13.0528 15.5938 13.7996C15.2063 14.5464 14.5932 15.152 13.8416 15.5302C13.0901 15.9085 12.2385 16.0401 11.4078 15.9065C10.5771 15.7728 9.80977 15.3806 9.21485 14.7857C8.61993 14.1908 8.22774 13.4234 8.09408 12.5928C7.96042 11.7621 8.09208 10.9104 8.47034 10.1589C8.8486 9.4074 9.4542 8.79429 10.201 8.40679C10.9478 8.01929 11.7978 7.87713 12.63 8.00055C13.4789 8.12643 14.2649 8.52201 14.8717 9.12885C15.4785 9.7357 15.8741 10.5216 16 11.3705Z'
                      stroke='var(--content-color)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M17.5 6.50049H17.51'
                      stroke='var(--content-color)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
                <a href=''>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18 2.00049H15C13.6739 2.00049 12.4021 2.52727 11.4645 3.46495C10.5268 4.40264 10 5.67441 10 7.00049V10.0005H7V14.0005H10V22.0005H14V14.0005H17L18 10.0005H14V7.00049C14 6.73527 14.1054 6.48092 14.2929 6.29338C14.4804 6.10585 14.7348 6.00049 15 6.00049H18V2.00049Z'
                      stroke='var(--content-color)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
                <a href=''>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M22.54 6.42049C22.4212 5.9459 22.1793 5.51106 21.8386 5.15989C21.498 4.80873 21.0707 4.55367 20.6 4.42049C18.88 4.00049 12 4.00049 12 4.00049C12 4.00049 5.11999 4.00049 3.39999 4.46049C2.92924 4.59367 2.50197 4.84873 2.16134 5.19989C1.82071 5.55106 1.57878 5.9859 1.45999 6.46049C1.14521 8.20604 0.991228 9.9768 0.999992 11.7505C0.988771 13.5375 1.14276 15.3218 1.45999 17.0805C1.59095 17.5403 1.8383 17.9586 2.17814 18.295C2.51797 18.6313 2.93881 18.8743 3.39999 19.0005C5.11999 19.4605 12 19.4605 12 19.4605C12 19.4605 18.88 19.4605 20.6 19.0005C21.0707 18.8673 21.498 18.6122 21.8386 18.2611C22.1793 17.9099 22.4212 17.4751 22.54 17.0005C22.8524 15.2681 23.0063 13.5108 23 11.7505C23.0112 9.96344 22.8572 8.17919 22.54 6.42049V6.42049Z'
                      stroke='var(--content-color)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.75 15.0205L15.5 11.7505L9.75 8.48047V15.0205Z'
                      stroke='var(--content-color)'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className='footer-customer'>
              <h5>CUSTOMER CARE</h5>
              <ul>
                <li>
                  {" "}
                  <a href='#'>Contact us</a>
                </li>

                <li>
                  <a href='#'>FAQ</a>
                </li>
                <li>
                  <a href='#'>The KULT</a>
                </li>
                <li>
                  <a href='#'>Beauty Dictionary</a>
                </li>
                <li>
                  <a href='#'>Skincare 101</a>
                </li>
                <li>
                  <a href='#'>Skin Konsult</a>
                </li>
              </ul>
            </div>
            <div className='footer-about-2nd'>
              <h5>ABOUT</h5>
              <ul>
                <li>
                  <a href='#'>Our Story</a>
                </li>
                <li>
                  <a href='#'>Kanvas Scoop</a>
                </li>
                <li>
                  <a href='#'>Shipping and Returns</a>
                </li>
                <li>
                  <a href='#'>Terms of Use</a>
                </li>
                <li>
                  <a href='#'>Careers / Affiliates</a>
                </li>
              </ul>
            </div>
            <div className='footer-join'>
              <h5>JOIN</h5>
              <label htmlFor='email'>Join us and we'll love you forever</label>
              <input
                type='text'
                placeholder='Enter your email address'
                id='email'
              />
              <div className='btn-sub'>
                <button className='buttonForFooter'>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        </div>
        <div className='trademark'>
          <i className='fa-regular fa-copyright'></i>
          <p>&nbsp;&nbsp;Copy Right K-Beauty</p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
