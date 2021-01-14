import logo from '../images/mesto-logo.svg'

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Лого-место"></img>
    </header>
  )
}

export default Header