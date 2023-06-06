import styles from './SizeOption.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';

const SizeOption = ({ sizes, selectedSize, setSelectedSize }) => {
    return (
        <div>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map((size) => (
                    <li key={size.name}>
                        <button
                            type="button"
                            className={clsx(selectedSize === size && styles.active)}
                            onClick={() => setSelectedSize(size)}
                        >
                            {size.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SizeOption.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            additionalPrice: PropTypes.number.isRequired,
        })
    ).isRequired,
    selectedSize: PropTypes.shape({
        name: PropTypes.string.isRequired,
        additionalPrice: PropTypes.number.isRequired,
    }).isRequired,
    setSelectedSize: PropTypes.func.isRequired,
};

export default SizeOption;