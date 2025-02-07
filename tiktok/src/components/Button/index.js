import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);
function Button({
    children,
    to,
    href,

    primary = false,
    outline = false,
    round = false,

    small = false,
    medium = false,
    large = false,

    text = false,
    disabled = false,

    className,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    //Props for specific component
    const CompProps = {};
    if (!disabled) {
        if (to) {
            CompProps.to = to;
            Comp = Link;
        } else if (href) {
            CompProps.href = href;
            Comp = 'a';
        }
    }

    //Props for logic and none-specific
    const propsHandler = {
        onClick,
    };

    //Props for UI
    const size = {
        small,
        medium,
        large,
    };
    const theme = {
        primary,
        outline,
        round,
    };

    //Generate class
    const classes = cx('wrapper', {
        [className]: className,
        ...theme,
        ...size,
        text,
        disabled,
    });

    const props = {
        ...CompProps,
        ...propsHandler,
        ...passProps,
    };
    return (
        <Comp className={classes} {...(!disabled ? props : {})}>
            <span>{children}</span>
        </Comp>
    );
}
export default Button;
