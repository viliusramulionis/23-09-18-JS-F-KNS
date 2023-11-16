import logo from './logo.svg';
import styles from './Header.module.css';
import Navigation from '../navigation/Navigation';
import Container from '../container/Container';

export default () => {
    const nav = ['Home', 'About Us', 'Contact', 'Carreers', 'History'];

    return (
        <header className={styles.header}>
            <Container classes={[styles.headerFlex]}>
                <div>
                    <img src={logo} alt="Logotipas" className={styles.logo} />
                </div>
                <Navigation navigacija={nav} />
            </Container>
        </header>
    );
}
