import './App.scss';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <h1>Bookkeeper App</h1>
      <nav className="app-nav-bar">
        <Link to='invoices'>Invoises</Link> | <Link to='expenses'>Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
