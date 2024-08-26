import "./App.css";
import Badge from "./components/Badge/Badge";
import Banner from "./components/Banner/Banner";

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
    </>
  );
}

export default App;
