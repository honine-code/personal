declare module 'react-router-bootstrap' {
    import { ComponentType, ReactNode } from 'react';
    import { NavLinkProps } from 'react-router-dom';
    import { NavItemProps } from 'react-bootstrap';

    export interface LinkContainerProps extends NavLinkProps {
        to: string;
        replace?: boolean;
        children: ReactNode;
    }

    export const LinkContainer: ComponentType<LinkContainerProps & NavItemProps>;
}