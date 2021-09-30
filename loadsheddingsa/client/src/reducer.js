
const api = {

    position:{
        screenx: 0,
        screeny:0,
    },
  pstate: false,
  showall:{data: [],
  avoids: 'Time',
  },
    imeko:true,
    schedules:[],
    collection: [],
  issues: [],
  
  };
  
  const cliReducer = (state = api, action) => {
    switch (action.type) {
      case "POSITION":
        state = { ...state, position: action.payload };
        break;
      case "P-STATE":
        state = { ...state, pstate: action.payload };
        break;
        case "PROVINCE":
          state = { ...state, schedules: action.payload };
        break;
        case "ISSUE":
          state = { ...state, issues: action.payload };
            break;
            case "GEODATA":
                state = { ...state, collection: action.payload };
        break;
        case "IMEKO":
          state = { ...state, imeko: action.payload };
          break;
          case "SHOWALL":
          state = { ...state,showall: action.payload };
          break;
      default:
        state = api;
    }
    return state;
  };

  export default cliReducer
