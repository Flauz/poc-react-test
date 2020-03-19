var NewComponent = React.createClass({
    render: function () {
        return (

            <nav className="nav-tree nobottommargin">
                <ul>
                    <li>
                        <a className="navbar-account__link d-flex" href="https://club-sandbox-preprod.leoo-factory.io/mon-compte/mes-points/">
                            <i className="icon-coins" />
                            <span>Mes Points</span>
                        </a>
                    </li>
                    <li>
                        <a className="navbar-account__link d-flex" href="https://club-sandbox-preprod.leoo-factory.io/mon-compte/mes-informations/">
                            <i className="icon-appstore" />
                            <span>Mes informations</span>
                        </a>
                    </li>
                    <li>
                        <a className="navbar-account__link d-flex" href="https://club-sandbox-preprod.leoo-factory.io/mon-compte/mes-parrainages/">
                            <i className="icon-users1" />
                            <span>Mes parrainages</span>
                        </a>
                    </li>
                    <li>
                        <a className="navbar-account__link d-flex" href="https://club-sandbox-preprod.leoo-factory.io/mon-compte/mes-commandes-de-cadeaux/">
                            <i className="icon-leaf1" />
                            <span>Mes commandes de cadeaux</span>
                        </a>
                    </li>
                    <li>
                        <a className="navbar-account__link d-flex" href="https://club-sandbox-preprod.leoo-factory.io/mon-compte/se-deconnecter/">
                            <i className="icon-line2-logout" />
                            <span>Se déconnecter</span>
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
});