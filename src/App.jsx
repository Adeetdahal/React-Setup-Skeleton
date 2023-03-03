import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routing from './routes/Routes';

function App() {
    return (
        <>
            <ToastContainer theme="dark" />
            <Routing />
        </>
    );
}

export default App;
