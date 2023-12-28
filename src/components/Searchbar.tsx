import cloudsImg from '../assets/clouds-cloud-svgrepo-com.svg';

const Searchbar = ({ query, setQuery, search }: any) => {
    return (
        <nav>
            <div>
                <img src={cloudsImg} alt="logo" />
                <h1>Clouder</h1>
            </div>

            <input
                type="search"
                className="searchbar"
                placeholder="Search location..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={search}
            />
        </nav>
    );
};

export default Searchbar;
