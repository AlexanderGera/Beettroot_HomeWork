import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header_logo">
          <span>Logo</span>
        </div>
        <nav className="header_menu-holder">
          <span className="header_menu-item">About us</span>
          <span className="header_menu-item"> Products </span>
          <span className="header_menu-item"> Contacts </span>
        </nav>
      </header>    
      <section className='banner'>
        Full - width banner image
      </section>
      <main className='content-wrapper'>

        <section className="content-holder">
            <span>Blog</span>
            <div className='content-item'></div>
            <div className='content-item'></div>
            <div className='content-item'></div>
            <div className='content-item'></div>
        </section>

        <section className="content_news">
          <span>News</span>
            <div className='news-item'></div>
            <div className='news-item'></div>
            <div className='news-item'></div>
        </section>

      </main>



    </div>
  );
}

export default App;
