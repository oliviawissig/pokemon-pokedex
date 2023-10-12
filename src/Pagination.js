function Pagination({ gotoNextPage, gotoPrevPage }) {
    return ( 
        <div>
            {gotoPrevPage && <button onClick={gotoPrevPage}>previous</button>}
            {gotoNextPage && <button onClick={gotoNextPage}>next</button>}
        </div>
     );
}

export default Pagination;