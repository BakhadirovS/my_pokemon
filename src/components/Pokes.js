import React from 'react';
import Poke from "./Poke";
import "./Pokes.css";
import { Link } from 'react-router-dom';

function Pokes({pokes}) {
    const renderPokes = () => {
        if (pokes) {
            return pokes.map((poke) => (
                <Link key={poke} to={`pokemon/${poke.url.split('/')[6]}`}>
                    <Poke url={poke.url} />
                </Link>
            ));
        } else {
            return null;
        }
    };

    return (
        <section className="card-list">
            {renderPokes()}
        </section>
    );
}

export default Pokes;

