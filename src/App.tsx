import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Riot from './pages/riot';
import Student from './pages/Student';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/student' element={<Student />} />
                <Route path='/riot' element={<Riot />} />
                {/* <Route path='*' element={<NotFound />} /> */}
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
