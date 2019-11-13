import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header className="container">
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <a className="navbar-item">
              <img src="assets/img/portugal.svg" width={112} height={28} />
            </a>
            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div className="navbar-menu">
            <div className="navbar-end">
              <div className="navbar-item">
                <input className="input is-rounded padding margin" type="text" placeholder="Digite aqui..." />
                <a className="button is-primary is-rounded  padding margin">Buscar</a>
              </div>
            </div>
          </div>
        </nav>
        <section className="hero">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">
                SEF Monitor
              </h1>
              <h2 className="subtitle">
                Aplicação criada com o intuito de mostrar as datas disponíveis para renovação ou concessão de documentos.
              </h2>
              <div className="notification">
                <button className="delete" />
                Vale ressaltar que esse é um projeto open-source e apenas informativo. Não realizando nenhum tipo de intermedio entre o cidadão e SEF.
              </div>
            </div>
          </div>
        </section>
        <div className="tabs is-centered is-toggle is-toggle-rounded">
          <ul>
              <li className="type-service is-active">
                  <a>
                      <span className="icon is-small">
                          <i className="fas fa-calendar-plus" aria-hidden="true"></i>
                      </span>
                      <span>Renovação Título Residência</span>
                  </a>
              </li>
              <li className="type-service ">
                  <a>
                      <span className="icon is-small"><i className="fas fa-id-card-alt" aria-hidden="true"></i></span>
                      <span>Concessão Cartão Residência (UE)</span>
                  </a>
              </li>
          </ul>
          </div>
      </header>
    )
  }
}

export default Header;
