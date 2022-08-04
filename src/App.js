import Header from './components/Header'
import MainContent from './components/Main-Content'
import CardData from './components/CardData'
import './App.css';

function App() {
  //mapping over the array and passing data into the component and then returning it
  const data = CardData.map((e)=> {
    return <MainContent 
      key={e.country}
      img={e.img}
      country={e.country}
      view={e.view}
      title={e.title}
      date={e.date}
      description={e.description}
    />
  })
  return (
    //rendering components
    <div className="App">
      <Header/>
      {data}
    </div>
  );
}

export default App;
