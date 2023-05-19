import { Error } from './Error';
import { Header } from './Header';
import { About } from './About';
import { Users } from './Users';
import { Main } from './Main';
import { UserId } from './UserId';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/about' element={<About/>} />
          <Route exact path='/users' element={<Users/>} />
          <Route path='/users/:id' element={<UserId/>} />
          <Route path='*' element={<Error/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
