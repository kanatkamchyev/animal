import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Advicepage } from "./pages/Advicepage/Advicepage";
import { HomePage } from "./pages/Homepage/HomePage";
import { Newspage } from "./pages/Newspage/Newspage";
import Signin from './components/Signin/Signin';
import LoginForm from './components/Login/Login';
import { Admin } from './pages/admin/mainAdmin/Admin';
import { AdminNews } from './components/admin/adminNews/AdminNews';

function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/news' element={<Newspage />} />
            <Route path='/advice' element={<Advicepage />} />
            <Route path='/signin' element={<Signin />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/admin/news' element={<AdminNews />} />
          </Routes>
        </div>
      </Router>

  );
}

export default App;
