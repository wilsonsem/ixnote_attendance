import LoginPage from "./pages/auth/views/LoginPage";
import SignupPage from "./pages/auth/views/SignupPage";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return(
    <Router>
    <div className="App">
    {/* <NavBar /> */}
    <div className='content'>
      {/* <Home /> */}
      <Routes>
        {/* <Route exact path="/" element={<Home/>}/> */}
        <Route exact path="/" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        {/* <Route path="*" element={<NotFound/>}/> */}
      </Routes>
    </div>
    </div>
  </Router>
  )
}

export default App;
