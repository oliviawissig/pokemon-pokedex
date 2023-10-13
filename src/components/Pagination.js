import "../styles/PokeList.css";

function Pagination({ gotoNextPage, gotoPrevPage }) {
    return ( 
        <div className="pagination">
            {gotoPrevPage && <button onClick={gotoPrevPage}>previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>next</button>}
        </div>
     );
}

export default Pagination;