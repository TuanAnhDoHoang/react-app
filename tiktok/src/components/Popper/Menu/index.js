import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faLanguage, faQuestion } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '~/components/Popper/Menu/MenuItem';

function Menu({ children }) {
    const cx = classNames.bind(styles);
    return (
        <Tippy
            interactive={true}
            placement="bottom-end"
            render={(attrs) => (
                <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <MenuItem className={cx('menu-english')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faLanguage} />
                            <span>English</span>
                        </MenuItem>
                        <MenuItem className={cx('menu-feedback')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faQuestion} />
                            <span>Feedback and help</span>
                        </MenuItem>
                        <MenuItem className={cx('menu-keyboard')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faKeyboard} />
                            <span>Keyboard shortcuts</span>
                        </MenuItem>
                    </PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
