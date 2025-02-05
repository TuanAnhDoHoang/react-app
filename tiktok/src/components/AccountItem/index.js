import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './AccountItem.module.scss';
import classNames from 'classnames/bind';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://yt3.ggpht.com/Pa8wyxqTOkhu5DW_RvkiQIS7Bsa7OW7gSen-2WpaQsC2EqUAkgubAg1_QPc951pzpN2F2Q4_TA=s88-c-k-c0x00ffffff-no-rj"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>anhdoo rusteen</span>
                    <FontAwesomeIcon className={cx('checkIcon')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>anhdoo</span>
            </div>
        </div>
    );
}

export default AccountItem;
