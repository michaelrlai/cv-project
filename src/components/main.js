import "../styles/main.css";
import General from "./general";
import Education from "./education";
import Experience from "./experience";

const Main = () => {
  return (
    <main className="main">
      <form>
        <General />
        <Experience />
        <Education />
      </form>
    </main>
  );
};

export default Main;
