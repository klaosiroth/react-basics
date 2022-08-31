import reactLogo from 'src/assets/react.svg';
import './Header.css';

export default function Header() {
  return (
    <header className="Header">
      <img src={reactLogo} className="Header__logo" alt="React Logo" />
      <span>React Basics</span>
    </header>
  );
}
