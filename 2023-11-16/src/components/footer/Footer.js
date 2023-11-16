import Navigation from "../navigation/Navigation";
import Container from "../container/Container";
import styles from './Footer.module.css';

export default () => {

    const nav = ['Privatumo Politika', 'Prekių grąžinimas', 'Duomenų apsauga'];

    return (
        <footer className={styles.footer}>
            <Container classes={['d-flex', 'justify-content-center']}>
                <Navigation navigacija={nav} />
            </Container>
        </footer>
    );
}