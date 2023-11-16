export default ({ classes, children }) => {
    const final = classes ? ['container', ...classes].join(' ') : 'container';

    return (
        <div className={final}>
            {children}
        </div>
    );
}