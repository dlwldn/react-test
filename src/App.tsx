import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Student from './pages/Student';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/student' element={<Student />} />
                {/* <Route path='*' element={<NotFound />} /> */}
                <Route path='*' element={<Navigate to='/'/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
