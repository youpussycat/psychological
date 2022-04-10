
const IndexTrainingCaro = ()=> import("../components/Carousels/IndexTrainingProCaro");
const IndexReactCaro = ()=> import("../components/Carousels/IndexReactCaro");
let PATH="/Carousels";
export const _carousels= [
    {
        path:PATH+'/IndexTrainingProCaro',
        name:'IndexTrainingProCaro',
        component:IndexTrainingCaro,
    },
    {
        path:PATH+'/IndexReactCaro',
        name:'IndexReactCaro',
        component:IndexReactCaro,
    },
]
