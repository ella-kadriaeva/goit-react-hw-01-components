import Statistic from './Statistic';
import PropTypes from 'prop-types';

export default function Statistics({items}) {
    return (
    <ul class="stat-list">
        {items.map(item => (
            <li key={item.id} class="item">
                <Statistic
                    label={item.label}
                    percentage={item.percentage}
                />
            </li>
        ))}
    </ul>      
)
};

Statistics.propTypes = {
    
items: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.string.isRequired,
    }),
    ),
};