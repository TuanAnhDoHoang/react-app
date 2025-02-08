import Button from 'src/components/Button';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

function MenuItem({ children, to }) {
    const cx = classNames.bind(styles);
    return (
        <div>
            <Button to={to} className={cx('menu-item')}>
                {children}
            </Button>
        </div>
    );
}

export default MenuItem;
