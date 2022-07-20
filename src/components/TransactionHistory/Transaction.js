import PropTypes from 'prop-types';
// import css from './FriendListItem.module.css';

export default function Transaction({ type, amount, currency }) {
return (
<div>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
</div>   
)
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};
