import "./App.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import pic1 from './assets'
function App() {
  return (
    <div className="App">
      {/* Header part */}
      <div className="header-container">
        <div className="header-title">
          <h4>Anh Thu Ngo - Web Developer</h4>
        </div>
      </div>

      {/* Part one: Introduction about myself */}
      <div className="part-one">
        <div
       
        className="part-one__left">
          <h1
           data-aos="fade-right"
          >Hi! My name is Anh Thu Ngo. </h1>
          <h3
           data-aos="fade-right"
          >I am a Computer Programming student in Ottawa, ON, Canada.</h3>
        </div>

        <div className="part-one__right">
          <img src='https://scontent.fxds1-1.fna.fbcdn.net/v/t39.30808-6/273910478_3081195262138512_3505003582593331216_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=bkfs-bUNdh0AX-TpvrP&_nc_ht=scontent.fxds1-1.fna&oh=00_AT_3PEAeWHWAGyl0Q13aZbQlT5EOzg5brm07umJSbqgMjQ&oe=62130C9F' alt=""/>
        </div>
      </div>

      {/* Part two: THE COFFEE HOUSE */}
      <div className="part-two">
        <div className="part-two__left"></div>
        <div className="part-two__right">
          <h3
          data-aos="fade-left"
          >THE COFFEE HOUSE</h3>
          <p
          data-aos="fade-left"
          >
            This is a clone webpage that is my first project using ReactJS as
            front end
          </p>
          <button
          data-aos="fade-left"
          >
          <a href="https://the-coffee-huse-clone.vercel.app/">Visit Website</a>
          
          </button>
        </div>
      </div>

      {/* part three: AirBnB */}
      <div className="part-three">
        <div className="part-three__left">
          <h1
           data-aos="fade-right"
          >AirBnB</h1>
          <p
           data-aos="fade-right"
          >
            This is a clone website that user can book a room, sign in, sign up.
          </p>
          <button
           data-aos="fade-right"
       >
          
          <a href="https://air-bn-b-clone-gray.vercel.app/">Visit Website</a>
          
          </button>
        </div>
        <div className="part-three__right"></div>
      </div>
      {/* Part Contact */}
      <div className="contacts">
        <div className="contacts__title">
          <h1>Contact</h1>
          <p>
            If you'd like to work together on new projects or have any questions
            then please get in touch - I'd love to hear from you!
          </p>
        </div>
        <div className="contacts__button">
          <button> SEND AN EMAIL</button>
          <button> OTHER INFORMATION</button>
        </div>
        <div className="contacts__info">
          <div className="contacts__info--left">
            <div className="contacts__info--left_content">
              <h4>Anh Thu Ngo</h4>
              <h3>02 Summerwind Crescent</h3>
              <h5>Nepean, ON K2G 6G6</h5>
              <h5>Canada</h5>
              <a href={"mailto:ngo00074@algonquinlive.com"}>
                ngo00074@algonquinlive.com
              </a>
              <p>
                <a href="whatsapp://send?text=Hello World!&phone=+9198996851">
                +1 (343) 558 441
                </a>
              </p>
            </div>
          </div>
          <div className="contacts__info--right">
            <div className="contacts__info--right_content">
              <h4>Whatsapp number</h4>
              <p>
                <a href="whatsapp://send?text=Hello World!&phone=+9198996851">
                  +1 (343) 558 441
                </a>
              </p>
              <div className="abc">
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/anh-thu-ngo-b15948211/">
                  Anh Thu Ngo
                </a>
              </div>
              <h4>GitHub</h4>
              <a href="https://github.com/kelseyanhngo">kelseyanhngo</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
AOS.init();
export default App;
