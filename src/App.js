import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";
import Pokes from "./components/Pokes";
import Loader from "./components/UI/loader/Loader";
import ErrorHandler from "./components/Utils/ErrorHandler";
import Navbar from "./components/Navbar";

const App = () => {
    const [pokes, setPokes] = useState();
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [prevPage, setPrevPage] = useState();
    const [nextPage, setNextPage] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [oldQuery, setOldQuery] = useState("");

    useEffect(() => {
        fetchData(url);
    }, [url]);

    const fetchData = async (url) => {
        setIsLoading(true);
        try {
            const response = await axios.get(url);
            setPokes(response.data.results.map(res => res));
            setPrevPage(response.data.previous);
            setNextPage(response.data.next);
            setIsLoading(false);
        } catch (error) {
            console.log(error.code);
            if (error.code === "ERR_BAD_REQUEST") {
                alert("BAD REQUEST, TRY AGAIN");
            } else {
                alert("Error Occurred, Please check your connection and reload the page");
            }
        }
    };

    const searching = (query) => {
        if (oldQuery.length > query.length) {
            fetchData(url);
        }
        setPokes(pokes.filter(poke => poke.name.toLowerCase().includes(query.toLowerCase())));
        setOldQuery(query);
    };

    return (
        <ErrorHandler>
            <Navbar nextPage={nextPage} prevPage={prevPage} searching={searching} setUrl={setUrl} />
            {isLoading ? <Loader /> : <Pokes pokes={pokes} />}
        </ErrorHandler>
    );
};

export default App;
