import "./Home.css"
import Logo3 from "../../assets/Logo3.png"

function Home() {
  return (
    <div className="home-container">
      <div className="background-image"></div>
      <div className="logo">
        <img src={Logo3} alt="LogoPrincipal" />
      </div>
      <div className="content">
        <p className="titulo">Web en construcción</p>
        <p className="subtitulo">Comunicate con nosotros</p>
      </div>
    </div>
  )
}

export default Home