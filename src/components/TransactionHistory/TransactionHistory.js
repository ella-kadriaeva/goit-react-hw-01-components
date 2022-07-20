import css from './TransactionHistory.module.css'
import Transaction from './Transaction';
import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {

    return (
<table className={css.transactionHistory}>
    <thead>
    <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
    </tr>
        </thead>
            
    <tbody>
{transactions.map(transaction => (
        <Transaction  key={transaction.id}    
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
            />
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