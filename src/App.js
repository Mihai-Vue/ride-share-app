import './App.css';
import Header from "./components/Header";
import Main from "./components/Main"
import Card from "./components/Card";
import PhoneCarousel from "./components/PhoneCarousel";
import QuestionArea from "./components/QuestionArea";


function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Card />
        <Card />
        <Card />
        <Card />
        <PhoneCarousel />
        <Card />
        <Card />
        <QuestionArea />
    </div>
  )
}

export default App;
