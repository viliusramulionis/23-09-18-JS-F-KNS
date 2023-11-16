import styles from './Navigation.module.css';

export default (props) => {
    return (
        <nav>
            <ul className={styles.navList}>
                {props.navigacija.map((el, index) => 
                    <li key={index}>
                        <a href="#" className={styles.navListLink}>{el}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
}