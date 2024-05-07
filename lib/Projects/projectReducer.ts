





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
        {
            title : "Project 1",
            description : "This is project 1",
            images : ["https://via.placeholder.com/150"],
            link : "",
            github : "",
            tech : [],
            id : 0
        },
    
        {
            title : "Project 2",
            description : "This is project 2",
            images : ["https://via.placeholder.com/150"],
            link : "",
            github : "",
            tech : [],
            id : 1
        },
    
        {
            title : "Project 3",
            description : "This is project 3",
            images : ["https://via.placeholder.com/150"],
            link : "",
            github : "",
            tech : [],
            id : 2
        }
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