
const ExampleCourses = ()=> import("../../components/HomePage/ExampleCourses");
let PATH="/HomePage"
let __homePage= [
    {//规定名称为HelloWorld的组件的component、path
        path: PATH+'/ExampleCourses',
        name: 'ExampleCourses',
        component: ExampleCourses,
    },
]
import {_elegantTeachers} from "./ElegantTeachers";
__homePage=__homePage.concat(_elegantTeachers);

export const _homePage=__homePage;
