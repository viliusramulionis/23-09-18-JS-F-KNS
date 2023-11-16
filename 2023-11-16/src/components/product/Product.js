import styles from './Product.module.css';

const Product = ({ value }) => {
    return (
        <div className={styles.product}>
            <div className="image">
                <img src={value.thumbnail} alt={value.title} />
            </div>
            <div className="info">
                <h4>{value.title}</h4>
                <p>{value.description}</p>
                <div className="prices">
                    EUR {value.price}
                </div>
            </div>
        </div>
    );
}

export default Product;