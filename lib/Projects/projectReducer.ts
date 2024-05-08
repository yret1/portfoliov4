





type Project = {
    title : string,
    description : string,
    images : string[],
    link : string,
    github : string,
    tech : string[],
    id : number
}

interface State {
    projects : Project[],
    selected : Project

}

const initialState : State = {


    projects : [
       
    ],
    selected : {
        title : "",
        description : "",
        images : [],
        link : "",
        github : "",
        tech : [],
        id : 0
    },

};




const projectReducer = (state = initialState, action : any) => {
    switch(action.type) {
        case 'GET_PROJECTS' :
            return {
                ...state,
                projects : action.payload
            }
        case 'SET_SELECTED' :
        const newSelected = state.projects.find((project) => project.title === action.payload)
            return {
                ...state,
                selected : newSelected
            }
        default :
            return state;
    }
}



export default projectReducer;