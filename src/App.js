import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Card from "./components/Card";
import PhoneCarousel from "./components/PhoneCarousel";
import QuestionArea from "./components/QuestionArea";
import {mainData} from "./data/mainData";
import {cardData} from "./data/cardData";


function App() {
    const mData = mainData.map(
         data => {
             return (
                 <Main
                    key={data.id}
                    title={data.title}
                    description1={data.description1}
                    description2={data.description2}
                    description3={data.description3}
                 />
             )
        }
    )
    const dataCard = cardData.map(
        data => {
            return (
                <Card
                    key={data.id}
                    logo={data.logo}
                    logoAlt={data.logoAlt}
                    title={data.title}
                    description1={data.description1}
                />
            )
        }
    )
  return (
    <div className="App">
        <Header />
        {mData}
        {dataCard}
        <PhoneCarousel />
        <Card />
        <Card />
        <QuestionArea />
    </div>
  )
}

export default App;
