const Buscador = () => {
    return (
            <div className="container-fluid">
                <form className="d-flex" role="search">
                    <input className="form-control-lg me-2 "  type="search" placeholder="Que buscas?" aria-label="Search" />
                        <button className="btn btn-outline-dark" type="submit">Buscar</button>
                </form>
            </div>
    )
}

export default Buscador;