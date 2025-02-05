import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useEffect, useState } from 'react';

import style from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from 'src/components/AccountItem';
const cx = classNames.bind(style);
function Header() {
    const [visible, setVisible] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setVisible([1, 2, 3]);
        }, 3000);
    }, []);
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok-logo" />
                <Tippy
                    interactive={true}
                    visible={visible.length > 0}
                    render={(attrs) => (
                        <div className={cx('searching-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search videos and accounts" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>Actions</div>
            </div>
        </header>
    );
}

export default Header;
