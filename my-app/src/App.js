import icon1 from './images/icon1.png'
import icon2 from './images/icon2.png'
import icon3 from './images/icon3.png'
import icon4 from './images/icon4.png'
import logo from './images/ironhack-logo-xs.png'
import menu from './images/menu-top-xs.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="body">
        <div className="nav">
          <img src={logo} alt="logo" id="logo" />
          <img src={menu} alt="menu" id="menu" />
        </div>

        <div className="main">
          <h1>
            Say hello to <br /> ReactJS
          </h1>
          <p>
            You will learn how to use <br /> the most popular frontend library,<br /> become
            a super Ninja Developer
          </p>
        </div>

        <div className="button">
          <button>Awesome!</button>
        </div>
      </div>

      <div className="images">
        <div>
          <img src={icon1} alt="image1" />
          <h3>Declarative</h3>
          <p>React makes it <br /> paintless to create <br /> interactive UIs</p>
        </div>

        <div>
          <img src={icon2} alt="image1" />
          <h3>Declarative</h3>
          <p>React makes it <br /> paintless to create <br /> interactive UIs</p>
        </div>

        <div>
          <img src={icon3} alt="image1" />
          <h3>Declarative</h3>
          <p>React makes it <br /> paintless to create <br /> interactive UIs</p>
        </div>

        <div>
          <img src={icon4} alt="image1" />
          <h3>Declarative</h3>
          <p>React makes it <br /> paintless to create <br /> interactive UIs</p>
        </div>
      </div>
    </div>
  )
}

export default App
