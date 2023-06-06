import styles from './ColorOption.module.scss'
import clsx from 'clsx';
import PropTypes from 'prop-types';

const ColorOption = ({ colors, selectedColor, setSelectedColor }) => {
    return (
        <div>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
                {colors.map((color) => (
                    <li key={color}>
                        <button
                            type="button"
                            className={clsx(
                                styles.colorButton,
                                selectedColor === color && styles.active
                            )}
                            style={{ backgroundColor: color }}
                            onClick={() => setSelectedColor(color)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

ColorOption.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedColor: PropTypes.string.isRequired,
    setSelectedColor: PropTypes.func.isRequired,
};
export default ColorOption;
