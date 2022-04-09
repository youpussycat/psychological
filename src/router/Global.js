
const SideBar = () => import("../components/Global/SideBar");
const Banner = () => import("../components/Global/Banner");
const Dialog = () => import("../components/Global/Dialog");
const TopLogo = () => import("../components/Global/TopLogo");
let PATH="/Global"
export const _global= [
    {
        path: PATH+'/SideBar',
            name: 'SideBar',
        component: SideBar,
    },
    {//规定名称为HelloWorld的组件的component、path
        path: PATH+'/TopLogo',
        name: 'TopLogo',
        component: TopLogo,
    },
    {
        path: PATH+'/Dialog',
        name: 'Dialog',
        component: Dialog,
    },
    {
        path: PATH+'/Banner',
        name: 'Banner',
        component: Banner,
    },
]
