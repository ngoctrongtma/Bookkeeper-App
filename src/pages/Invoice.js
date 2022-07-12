import { useParams } from 'react-router-dom';
import { getInvoice } from '../data/dataInvoices';

function Invoice() {
    const params = useParams();
    const invoice = getInvoice(params.invoiceId);
    return (
        <main style={{ padding: "1rem 0" }}>
            <div className="invoice-detail-wrap">
                <h2>Invoice detail</h2>
                <span>id: {invoice.id} | name: {invoice.name} | number: {invoice.number} | amount: {invoice.amount} | due date: {invoice.due}</span>
            </div>

        </main>
    )
}
export default Invoice