import Tippy from '@tippyjs/react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
function SecondWrapper({ children }) {
    return (
        <Tippy content="hello">
            <PopperWrapper>{children}</PopperWrapper>
        </Tippy>
    );
}

export default SecondWrapper;
