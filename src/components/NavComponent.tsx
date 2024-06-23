export const NavComponent = () => {
    return (
        <div className={"container"}>
            <nav className={"navbar navbar-expand-lg bg-body-tertiary p-3"}>
                <div className={"container row"}>
                    <div className={"fw-bold col-7"}>
                        개발자 안병준
                    </div>

                    <div className="col-2 d-flex justify-content-around">
                        <a href={"https://github.com/dksqodwns"}>
                            Github
                        </a>
                        <a href={"https://velog.io/@dksqodwns"}>
                            Blog
                        </a>
                    </div>
                </div>
            </nav>
        </div>
    )
}