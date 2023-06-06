import styles from './ProductImage.module.scss';

const ProductImage = ({title, name, selectedColor}) => {
    return (
        <div className={styles.imageContainer}>
            <img
                className={styles.image}
                alt={title}
                src={`${process.env.PUBLIC_URL}/images/products/shirt-${name}--${selectedColor}.jpg`} />
        </div>
    )
};
export default ProductImage;
