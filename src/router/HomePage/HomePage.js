
const ExampleCourses = ()=> import("../../components/HomePage/ExampleCourses");
const IndexTrainingPro = () => import("../../components/HomePage/IndexTrainingPro")
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
        component:IndexTrainingPro,
    },
]
import {_elegantTeachers} from "./ElegantTeachers";
__homePage=__homePage.concat(_elegantTeachers);

export const _homePage=__homePage;
