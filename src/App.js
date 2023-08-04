import logo from "./logo.svg";
import "./App.css";
import TouristPlace from "./TouristPlace";

function App() {
  return (
    <div style={{ margin: "5rem", display: "flex", flexWrap: "wrap" }}>
      <TouristPlace
        Name="AmerFort"
        ImagePath="images/AmerFort.png"
        Type="Fort"
        MoreInfo="https://en.wikipedia.org/wiki/Amber_Fort"
      ></TouristPlace>
      <TouristPlace
        Name="Charminar"
        ImagePath="images/Charminar.png"
        Type="Fort"
        MoreInfo="https://en.wikipedia.org/wiki/Charminar"
      ></TouristPlace>
      <TouristPlace
        Name="Dal Lake"
        ImagePath="images/Dal Lake.png"
        Type="Fort"
        MoreInfo="https://en.wikipedia.org/wiki/Dal_Lake"
      ></TouristPlace>
      <TouristPlace
        Name="Ellora Caves"
        ImagePath="images/Ellora Caves.png"
        Type="Fort"
        MoreInfo="https://en.wikipedia.org/wiki/Ellora_Caves"
      ></TouristPlace>
    </div>
  );
}

export default App;
