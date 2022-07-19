import Statistic from '../Statistic/Statistic';
import PropTypes from 'prop-types';
import css from './Statistics.module.css'

export default function Statistics({items}) {
    return (
    <ul className={css.block}>
        {items.map(item => (
            <li key={item.id} className={css.item}>
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