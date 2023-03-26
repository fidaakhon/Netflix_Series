import './App.css';
import Card from './Compopnents/Cards';
import Sdata from './Compopnents/Sdata';

function ncard(val) {
  return (
    <Card imgsrc={val.imgsrc} title={val.title} url={val.url} key={val.id} />
  )
}

function App() {
  return (
    <>
      <h1>Top 5 Netflix Series of 2023</h1>
      <div className="Cardss">
        {/* <Card imgsrc="./images/class.jpg" title="CLASS" url="https://www.youtube.com/watch?v=nuSMGtZhsAc" />
        <Card imgsrc="./images/trial.png" title="Trial By Fire" url="https://www.imdb.com/title/tt11611698/" />
        <Card imgsrc="./images/mydad.jpg" title="The Bounty Hunter" url="https://www.youtube.com/watch?v=nuSMGtZhsAc" /> */}

        {/* //MAPing function  */}
        {Sdata.map(ncard)}
      </div>

    </>
  );
}

export default App;
