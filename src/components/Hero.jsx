import { Container} from 'react-bootstrap';
import heroSvg from '/hero_model.svg';


const Hero = () => {
  return (
    <>
       {/* Hero Section */}
       
      <div className="text-yellow text-center d-flex align-items-center">
        <Container>
          <div className="d-flex align-items-center justify-content-center h-100 mx-5 my-3">
          <img src={heroSvg} alt="Hero Illustration" className="img-fluid py-5" style={{height:"25rem"}} />
          </div>

          <h1 className="display-4 fw-bold">Welcome to Campus LF hub</h1>
          <p className="lead">
          What is lost is never truly gone — it waits, patiently, to be found again.
          </p>
        </Container>
      </div>

    </>
  )
}

export default Hero
