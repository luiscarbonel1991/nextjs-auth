import { MainNavItem, SidebarNavItem } from "@/types/nav"

interface NavConfig{
    main_marketing: MainNavItem[]
    sidebar_marketing: SidebarNavItem[]
}

export const navConfig: NavConfig = {
    main_marketing: [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Services',
            href: '/services',
        },
        {
            title: 'Testimonials',
            href: '/testimonials',
            disabled: true,
        },
        {
            title: 'Team',
            href: '/team',
            disabled: true,
        },
        {
            title: 'Contact us',
            href: '/contact',
        },
    ] as MainNavItem[],
    sidebar_marketing: [
        {
            title: 'Home',
            href: '/',
            items:[],
        },
        {
            title: 'Services',
            href: '/services',
            items:[],
        },
        {
            title: 'Testimonials',
            href: '/testimonials',
            items:[],
            disabled: true,
        },
        {
            title: 'Contact us',
            href: '/contact',
            items:[],
        },
    ] as SidebarNavItem[],
};

export const getNavConfig = () => {
    return {
        main_marketing: navConfig.main_marketing.filter((item) => !item.disabled),
        sidebar_marketing: navConfig.sidebar_marketing.filter((item) => !item.disabled),
    };
}