import styles from './Menu.module.scss';
import classNames from 'classnames/bind';

function MenuItem({ children }) {
    const cx = classNames.bind(styles);
    return <div className={cx('menu-item')}>{children}</div>;
}

export default MenuItem;
