import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../data/dataInvoices';
function Invoices() {
    const listInvoices = getInvoices();
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoices</h2>
            <button>
                <Link to="">
                    Back
                </Link>
            </button>
            <ul className="list-invoices">
                {listInvoices.map((item, index) => {
                    return (
                        <Link key={item.id} to={`${item.id}`} className="invoices-item">
                            <li key={item.id}>id: {item.id} | name: {item.name} </li>
                        </Link>
                    )
                })}
            </ul>
            <Outlet />
        </main>
    )
}
export default Invoices