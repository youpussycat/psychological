import { createRouter,createWebHashHistory} from "vue-router";
const Banner = () => import("../components/Global/Banner");
const Dialog = () => import("../components/Global/Dialog");
const Index = () => import("../components/Page/Index");
const Login = () => import("../components/RegisterPage/Login");
const Register = () => import("../components/RegisterPage/Register");
const SideBar = () => import("../components/Global/SideBar");
const TopLogo = () => import("../components/Global/TopLogo");
const HelloWorld = ()=> import("../components/HelloWorld");
const ExampleCourses = ()=> import("../components/HomePage/ExampleCourses");

const routes = [

	{
		path: '/Global/Banner',
		name: 'Banner',
		component: Banner,
	},
	{
		path: '/Global/Dialog',
		name: 'Dialog',
		component: Dialog,
	},
	{
		path:'/',
		name:'Index',
		component: Index,
	},
	{
		path: "/Login",
		name: 'Login',
		component: Login,
	},
	{
		name: "Register",
		path: '/Register',
		component:Register,
	},
	{
		path: '/Global/SideBar',
		name: 'SideBar',
		component: SideBar,
	},
	{//规定名称为HelloWorld的组件的component、path
		path: '/Global/TopLogo',
		name: 'TopLogo',
		component: TopLogo,
	},
	{//规定名称为HelloWorld的组件的component、path
		path: '/HelloWorld',
		name: 'HelloWorld',
		component: HelloWorld,
	},
	{//规定名称为HelloWorld的组件的component、path
		path: '/HomePage/ExampleCourses',
		name: 'ExampleCourses',
		component: ExampleCourses,
	},
]
export const router = createRouter({
	history: createWebHashHistory(),
	routes: routes
})
