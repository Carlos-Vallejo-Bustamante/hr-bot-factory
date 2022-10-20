import './App.css';
import ImageCarousel from './components/carousel/Carousel';
import Chat from './components/chat/Chat';
import InputChat from './components/inputChat/InputChat';

function App() {

  return (
    <div className="App">
      <img className='iphone' src="iphone_12.png" alt="iphone" />
      <div className='mobile'>
        <Chat />
        <InputChat />
        <ImageCarousel />
      </div>
    </div>
  );
}

export default App;
