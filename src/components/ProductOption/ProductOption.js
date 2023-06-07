import styles from './ProductOption.module.scss'
import Button from '../Button/Button';
import ColorOption from '../ColorOption/ColorOption';
import SizeOption from '../SizeOption/SizeOption';

const ProductOption = ({
                            sizes,
                            colors,
                            selectedSize,
                            selectedColor,
                            setSelectedSize,
                            setSelectedColor,
                            handleSubmit
                        }) => {
    return (
        <form>
            <SizeOption
                sizes={sizes}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
            />
            <ColorOption
                colors={colors}
                selectedColor={selectedColor}
                setSelectedColor={setSelectedColor}
            />
            <Button className={styles.button} onClick={handleSubmit}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

export default ProductOption;