const Buscador = () => {
    return (
        <div className="container-fluid">
        <form className="d-flex" role="search">
            <div className="input-group">
                <input className="form-control-lg me-2 fs-6" type="search" placeholder="Qué buscas?" aria-label="Search" />
                <button className="btn btn-outline-dark fs-6" type="submit">
                <ion-icon name="search-outline"></ion-icon>
                </button>
            </div>
        </form>
    </div>
    )
}

export default Buscador;