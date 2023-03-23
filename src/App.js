import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

const style = {
  margin: '1rem', 
  padding: '0.5rem', 
  border: '2px solid black',
}

function Home(props) {
  return (
    <h2 style={{...style, borderColor: 'red' }}>Home Screen</h2>
  )
}

function Dog(props) {
  return (
    <h2 style={{...style, borderColor: 'blue' }}>Dog Screen</h2>
  )
}

function About(props) {
  return (
    <h2 style={{...style, borderColor: 'green' }}>About Screen</h2>
  )
}


function App() {
  return (
    <BrowserRouter>
      <h1>My App</h1>
      <nav>
        <Link to='/'>Home</Link>&nbsp;
        <Link to='dog'>Dog</Link>&nbsp;
        <Link to='about'>About</Link>&nbsp;
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/> 
        <Route path='/dog' element={<Dog />}/> 
        <Route path='/about' element={<About />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
