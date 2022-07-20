import css from './TransactionHistory.css'
import Transaction from './Transaction';
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {

    return (
    <table className={css.transactionHistory}>
    <thead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
    </thead>
    <tbody key={item.id} className={css.item}>
    {items.map(item => (
    <tr >
                <Transaction
                type={item.type}
                amount={item.amount}
                currency={item.currency}
                />
    </tr>
    ))}
    </tbody>
</table>
    )
}


TransactionHistory.propTypes = {
    
items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    }),
    ),
};
