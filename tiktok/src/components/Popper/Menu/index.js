import Tippy from '@tippyjs/react';
import tippy from 'tippy.js/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKeyboard, faCircleQuestion, faEarthAsia } from '@fortawesome/free-solid-svg-icons';
import MenuItem from '~/components/Popper/Menu/MenuItem';

function Menu({ children }) {
    const cx = classNames.bind(styles);
    return (
        <Tippy
            interactive
            placement="bottom-end"
            delay={[0, 1000]}
            render={(attrs) => (
                <div className={cx('menu-items')} {...attrs}>
                    <PopperWrapper className={cx('menu-padding')}>
                        <MenuItem className={cx('menu-english')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faEarthAsia} />
                            <span>English</span>
                        </MenuItem>
                        <MenuItem className={cx('menu-feedback')} to="/feedback">
                            <FontAwesomeIcon className={cx('icon')} icon={faCircleQuestion} />
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
