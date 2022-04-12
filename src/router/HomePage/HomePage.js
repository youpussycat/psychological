
const ExampleCourses = ()=> import("../../components/HomePage/ExampleCourses");
const IndexTrainingPro = () => import("../../components/HomePage/IndexTrainingPro")
const FamousTeacherStyle = () => import("../../components/HomePage/FamousTeacherStyle");
const LegalNotices = () => import("../../components/HomePage/LegalNotices");
const TrainingArounds = () => import("../../components/HomePage/TrainingArounds");
const OnlineLearning = () => import("../../components/HomePage/OnlineLearning");
const Page_Prompt = () => import("../../components/HomePage/Page_Prompt")
const RightSidebar = () => import("../../components/HomePage/RightSidebar")
const MenuBar = () => import("../../components/HomePage/MenuBar")
const Footer = () => import("../../components/HomePage/Footer")
const Button = () => import("../../components/HomePage/Button")

let PATH="/HomePage"
let __homePage= [
    {//规定名称为HelloWorld的组件的component、path
        path: PATH+'/ExampleCourses',
        name: 'ExampleCourses',
        component: ExampleCourses,
    },

    {
        path: PATH+'/IndexTrainingPro',
        name:'IndexTrainingPro',
        component: IndexTrainingPro,
    },

    {
        path: PATH+'/RightSidebar',
        name:'RightSidebar',
        component: RightSidebar,
    },
    {
        path: PATH+'/MenuBar',
        name:'MenuBar',
        component: MenuBar,
    },
    {
        path: PATH+'/Footer',
        name:'Footer',
        component: Footer,
    },
    {
        path: PATH+'/Button',
        name:'Button',
        component: Button,
    },
    {
        path: PATH+'/FamousTeacherStyle',
        name:'FamousTeacherStyle',
        component:FamousTeacherStyle
    },
    {
        path: PATH+'/LegalNotices',
        name:'LegalNotices',
        component:LegalNotices
    },
    {
        path: PATH+'/TrainingArounds',
        name:'TrainingArounds',
        component:TrainingArounds
    },
    {
        path: PATH+'/OnlineLearning',
        name:'OnlineLearning',
        component:OnlineLearning
    },
    {
        path: PATH+'/Page_Prompt',
        name:'Page_Prompt',
        component:Page_Prompt
    }
]
import {_elegantTeachers} from "./ElegantTeachers";
 __homePage=__homePage.concat(_elegantTeachers);

export const _homePage=__homePage;
