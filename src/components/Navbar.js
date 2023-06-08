import React from 'react';

const Navbar = ({ searching, prevPage, nextPage, setUrl }) => {
    const handleSearch = (e) => {
        searching(e.target.value);
    };

    const handlePrevPage = () => {
        if (prevPage) {
            setUrl(prevPage);
        }
    };

    const handleNextPage = () => {
        if (nextPage) {
            setUrl(nextPage);
        }
    };

    return (
        <div className="align-items-center position-relative container mt-2 nav-poke">
            <input
                className="form-control search-bar w-25 position-absolute top-0 start-0"
                placeholder="Search..."
                onChange={handleSearch}
            />
            <img
                className="position-absolute top-0 start-50 translate-middle m-4"
                src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png"
                alt="poke API logo"
            />
            <ul className="pagination position-absolute top-0 end-0">
                <li className="page-item">
                    <button disabled={!prevPage} className="page-link" onClick={handlePrevPage}>
                        Previous
                    </button>
                </li>
                <li className="page-item">
                    <button disabled={!nextPage} className="page-link" onClick={handleNextPage}>
                        Next
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
