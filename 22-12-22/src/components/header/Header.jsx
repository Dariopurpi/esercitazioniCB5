import "./Header.css";

export const Header = () => {
  const menuItems = [
    { label: "Home", href: "#Home", id: 1 },
    { label: "Contact", href: "#Contact", id: 2 },
    { label: "esempio", href: "#esempio", id: 3 },
  ];
  return (
    <header className="header">
      <div className="row">
        <div className="column">Logo</div>
        <div className="column">
          <nav className="nav">
            <ul role="menu">
              {menuItems.map(function (menuItem) {
                return (
                  <li role="menuitem" key={menuItem.id}>
                    <a href={menuItem.href}>{menuItem.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
