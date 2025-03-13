import React, { useState} from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { Link } from "react-router-dom"; // Importar Link para navegación interna
import "./Sidebar.css"; // Asegúrate de tener este archivo CSS con los estilos

export default function Sidebar1() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="card flex justify-content-center">
      {/* Botón para abrir el Sidebar */}
      <Button icon="pi pi-bars" onClick={() => setVisible(true)} />

      <Sidebar
        visible={visible}
        onHide={() => setVisible(false)}
        className="sidebar-glass"
      >
        <div className="sidebar-content">
          {/* Header del Sidebar */}
          <div className="sidebar-header">
            <h1>La Rata Siamesa</h1>
            <img src="/ratapenege.png" alt="logo" /> {/* Corrección de la ruta */}
          </div>

          {/* Menú del Sidebar */}
          <div className="sidebar-menu">
            <ul>
              <li>
                <i className="pi pi-home"></i>
                <Link to='/Dashboard'>Dashboard</Link> {/* Corrección del enlace */}
              </li>
              <li>
                <i className="pi pi-user"></i>
                <Link to="/fiscalizacion">Fiscalización</Link>
              </li>
              <li>
                <i className="pi pi-user"></i>
                <a href="https://laratasiamesa.github.io/portafolio3/" target="_blank" rel="noopener noreferrer">Portafolio</a>
              </li>
              <li>
                <i className="pi pi-users"></i>
                <Link to="/recursos-humanos">Recursos Humanos</Link>
              </li>
              <li>
                <i className="pi pi-box"></i>
                <Link to="/extra">Extra</Link>
              </li>
              <li>
                <i className="pi pi-cog"></i>
                <Link to="/configuracion">Configuración</Link>
              </li>
            </ul>
          </div>

          {/* Usuario en la parte inferior */}
          <div className="sidebar-footer">
            <Avatar
              image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
              shape="circle"
            />
            <span>Amy Elsner</span>
          </div>
        </div>
      </Sidebar>
    </div>
  );
}
