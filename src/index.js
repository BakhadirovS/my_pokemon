import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import PokemonPage from './components/PokemonPage';

const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />} />
                    <Route path="/pokemon/:id" element={<PokemonPage />} />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

renderApp();
