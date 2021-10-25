import React from "react"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <a href="/" className="sidebar__brand">
        <i className="sidebar__brand-icon bx bxs-wink-smile"></i>
        <span className="sidebar__brand-text">AdminHub</span>
      </a>

      <ul className="sidebar__menu">
        <li className="sidebar__menu-item active">
          <a className="sidebar__menu-link" href="/">
            <i className="sidebar__menu-icon sidebar__menu-icon bx bxs-dashboard"></i>
            <span className="sidebar__menu-text">Dashboard</span>
          </a>
        </li>
        <li className="sidebar__menu-item">
          <a href="/" className="sidebar__menu-link">
            <i className="sidebar__menu-icon bx bxs-shopping-bag"></i>
            <span className="sidebar__menu-text">My Store</span>
          </a>
        </li>
        <li className="sidebar__menu-item">
          <a href="/" className="sidebar__menu-link">
            <i className="sidebar__menu-icon bx bxs-doughnut-chart"></i>
            <span className="sidebar__menu-text">Analytics</span>
          </a>
        </li>
        <li className="sidebar__menu-item">
          <a href="/" className="sidebar__menu-link">
            <i className="sidebar__menu-icon bx bxs-message-dots"></i>
            <span className="sidebar__menu-text">Messages</span>
          </a>
        </li>
        <li className="sidebar__menu-item">
          <a href="/" className="sidebar__menu-link">
            <i className="sidebar__menu-icon bx bxs-group"></i>
            <span className="sidebar__menu-text">Team</span>
          </a>
        </li>
      </ul>

      <ul className="sidebar__menu">
        <li className="sidebar__menu-item">
          <a href="/" className="sidebar__menu-link">
            <i className="sidebar__menu-icon bx bxs-cog"></i>
            <span className="sidebar__menu-text">Settings</span>
          </a>
        </li>
        <li className="sidebar__menu-item">
          <a href="/" className="sidebar__menu-link">
            <i className="sidebar__menu-icon bx bxs-log-out-circle"></i>
            <span className="sidebar__menu-text">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
