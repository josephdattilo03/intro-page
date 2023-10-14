import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import pennApps from "./pennapps.png"
import assassin from "./assassin.jpeg"
import gar from './gar.png'
import joe from "./joe.JPG"
import lance from "./lance.png"
import pat from "./pat.png"
import mark from "./mark.png"
import ethan from "./ethan.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()

function App() {
  return (
    <div className="App">
      <section className="bg-dark" id="title">
        <div>
          <h1 className="text-center pt-5 display-3 float">Hi<br />my name is<br /><span className="display-1">Joseph Dattilo</span></h1>
          <p className="text-center display-5 mx-5 float">A developer, drummer, and all around nerd at UPenn excited to be working with you Karpool.</p>
          <div className="text-center fluid-container mt-5 float pb-5">
            <a href="https://www.linkedin.com/in/joseph-dattilo-471436243/"><i className="bi bi-linkedin text-light"></i></a>
            <a href="https://github.com/josephdattilo03"><i className="bi bi-github text-light"></i></a>
            <a href="https://open.spotify.com/user/flameon39999"><i className="bi bi-spotify text-light"></i></a>
          </div>
        </div>
      </section>
      <section className="bg-secondary p-5" id="past-work">
        <h1 className="text-dark pt-5 text-center display-3">See some of my past work</h1>
        <div className="d-flex justify-content-center mt-5 flex-wrap">
          <div class="card m-2 float">
            <img src={pennApps} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">PennApps</h5>
                <p class="card-text">As a backend developer for UPenn's annual hackathon, I have been helping build a REST API to update old backend infrastructure.</p>
                <a href="https://pennapps.com/" class="btn btn-primary">Check it out</a>
              </div>
          </div>
          <div class="card m-2 float">
            <img src={assassin} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Assassin</h5>
                <p class="card-text">My first full stack application is an organizational platform for high school assassin (Ignore my random test names).<br/></p>
                <a href="https://pennapps.com/" class="btn btn-primary">Learn More</a>
              </div>
          </div>

          <div class="card m-2 float">
              <div class="card-body mt-4">
                <h5 class="card-title">Misc Projects</h5>
                <p class="card-text">Here are some of the projects that I have done at UPenn that I am most proud of:</p>
                <ul>
                  <li>Othello: For my CIS 1200 final project, I created Othello (Americanized Go). I even added sounds and extra details to make a friendly UI.</li>
                  <li>Snake: In CIS 2400, I made snake using assembly code and c.</li>
                  <li>LC4 CPU: Combining my skills in assembly and c, I made a virtual CPU to perform basic tasks.</li>
                </ul>
                <a href="https://github.com/josephdattilo03/Othello" class="btn btn-primary">Learn More</a>
              </div>
          </div>
        </div>
      </section>
      <section className="bg-primary p-5 text-white">
        <h1 className="text-center display-1">Meet the Team<br/><span class="wave">👋</span></h1>

        <div className="d-flex justify-content-center flex-wrap mt-5 pt-5">
          <div className="m-5 text-center">
            <img src={joe} className="profile rounded-circle"></img>
            <h3 className="display-5">Joseph Dattilo (Me)</h3>
          </div>
          <div className="m-5 text-center">
            <img src={gar} className="profile rounded-circle"></img>
            <h3 className="display-5">Garrett Arnold</h3>
          </div>
          <div className="m-5 text-center">
            <img src={lance} className="profile rounded-circle"></img>
            <h3 className="display-5">Lance Madarang</h3>
          </div>
          <div className="m-5 text-center">
            <img src={pat} className="profile rounded-circle"></img>
            <h3 className="display-5">Patrick Freeman</h3>
          </div>
          <div className="m-5 text-center">
            <img src={mark} className="profile rounded-circle"></img>
            <h3 className="display-5">Mark Mitu</h3>
          </div>
          <div className="m-5 text-center">
            <img src={ethan} className="profile rounded-circle"></img>
            <h3 className="display-5">Ethan Nguyen</h3>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
