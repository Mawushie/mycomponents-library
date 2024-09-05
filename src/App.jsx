import "./App.css";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import TestimonialWithoutImage from "./components/Testimonials/TestimonialWithoutImage";
import TestimonialWithImage from "./components/Testimonials/TestimonialWithImage";
import ToolTip from "./components/ToolTip/ToolTip";
import Toast from "./components/Toasts/Toast";

function App() {
  return (
    <>
      {/* <Badge color="pink" type="pill">
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
      <br></br> */}
      {/* <TestimonialWithImage
        image={`yoga.jpg`}
        name={`Mawushie Honyah`}
        company={`Netflix`}
        position={`Frontend Developer`}
      >
        Yoga challenges and calms me at the same time and I am beginning to
        really fall in love with it.
      </TestimonialWithImage> */}

      {/* <div>
        <ToolTip
          color="pink"
          theme="bold"
          title="Archive notes"
          details="Something you should know"
        />
        <br></br>
        <ToolTip
          color="blue"
          theme="light"
          title="Archive notes"
          details="Something you should know"
        />
      </div> */}

      {/* <Toast
        status="success"
        title="Success"
        details="Your work has been saved."
      /> */}

      <Toast
        status="error"
        title="Error"
        details="Please re-save your work again"
      />
    </>
  );
}

export default App;
