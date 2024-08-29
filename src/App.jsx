import "./App.css";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import TestimonialWithoutImage from "./components/Testimonials/TestimonialWithoutImage";
import TestimonialWithImage from "./components/Testimonials/TestimonialWithImage";

function App() {
  return (
    <>
      <Badge color="pink" type="pill">
        Badge
      </Badge>
      <br></br> <br></br>
      <Banner
        status="success"
        title="Congratulations"
        description="This is a congratulatory message"
      />
      <br></br>
      <Banner
        status="warning"
        title="Attention"
        description="This is a warning"
      />
      <br></br>
      <Banner
        status="error"
        title="Error"
        description="This is an error within your application"
      />
      <br></br>
      <Banner
        status="neutral"
        title="Update"
        description="New updates available"
      />
      <br></br>
      <br></br>
      <Card
        // iconBgColor={`lightgreen`}
        title="Easy Deployment"
        description={`This is a card to show how to achieve easy deployment.`}
      />
      <br></br>
      <br></br>
      <br></br>
      <TestimonialWithImage
        image={`Image.png`}
        name={`Mawushie Honyah`}
        company={`Netflix`}
        position={`Frontend Developer`}
      >
        I really enjoyed the services provided. Customer service was top notch.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita
        voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed
        rerum et corporis.
      </TestimonialWithImage>
    </>
  );
}

export default App;
