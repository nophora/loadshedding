import M1 from './components/assets/images (4).jpg'
import M2 from './components/assets/images (2).jpg'
import M3 from './components/assets/images (3).jpg'
import M4 from './components/assets/images (1).jpg'
import M5 from './components/assets/images (5).jpg'
import M6 from './components/assets/images (6).jpg'
import M7 from './components/assets/images (7).jpg'
import M8 from './components/assets/images (8).jpg'


const api = {

    position:{
        screenx: 0,
        screeny:0,
    },
  pstate: false,
  showall:{data: [ {
    province: "easterncape",
    zone: "9",
    stage: "3",
    dom: "1",
    time: "0:00-2:00"
},
{
    province: "freestate",
    zone: "1",
    stage: "1",
    dom: "1",
    time: "0:00-2:00"
},
{
    province: "gauteng",
    zone: "7",
    stage: "4",
    dom: "25",
    time: "8:00-10:00"
},
{
    province: "kwazulu-natal",
    zone: "12",
    stage: "7",
    dom: "4",
    time: "0:00-2:00"
},
{
    province: "limpopo",
    zone: "9",
    stage: "5",
    dom: "27",
    time: "22:00-0:00"
},
{
    province: "mpumalanga",
    zone: "1",
    stage: "1",
    dom: "1",
    time: "0:00-2:00"
},
{
    province: "northerncape",
    zone: "12",
    stage: "7",
    dom: "30",
    time: "2:00-4:00"
},
{
    province: "northwest",
    zone: "8",
    stage: "6",
    dom: "9",
    time: "4:00-6:00"
},
{
    province: "westerncape",
    zone: "9",
    stage: "3",
    dom: "1",
    time: "0:00-2:00"
},
{
    province: "northerncape",
    zone: "3",
    stage: "5",
    dom: "30",
    time: "2:00-4:00"
},

{
    province: "limpopo",
    zone: "9",
    stage: "4",
    dom: "27",
    time: "20:00-0:00"
},

{
    province: "freestate",
    zone: "2",
    stage: "1",
    dom: "1",
    time: "0:00-2:00"
},

{
    province: "kwazulu-natal",
    zone: "12",
    stage: "7",
    dom: "8",
    time: "0:00-2:00"
},
  ],
  avoids: 'Time',
  },
    imeko:true,
    schedules:[
      {
          province: "easterncape",
          zone: "9",
          stage: "3",
          dom: "1",
          time: "0:00-2:00"
      }],
    collection: [{
    town: "Mfuleni (1)",
    stage:"4",
    province:"Western Cape",
    municipality:"City of Cape Town" ,
    zone:"14",
    time:"10:00 - 12:30",
  }],
  issues: [{
    _id: '1',
    image:M1,
    location: 'Cape Town, Mfuleni, 7100, Extension 6, Kunene st',
    issue: `We are currently not load shedding . However if you are an Eskom customer 
    g  and  do not have electricity`,
    date: `15-08-2021 18:34`,
    solution:'false',
    resolve: [{
        _id: '10',
        image:M1,
        text: `please regidter on our app
        to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
        for downloading of all stage , including the extended stages 5-8, please click here`,
        date: `19-08-2021 18:34`,
    }]
  
},
{
    _id: '2',
    image:M2,
    location: 'Simons Town, Mfuleni, 7100, Extension 6, Kunene st',
    issue: `please regidter on our app
    to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
    for downloading`,
    date: `16-08-2021 18:34`,
    solution:'false',
    resolve: []
  
    },
    {
        _id: '3',
        image:M3,
        location: 'Minetry, Mfuleni, 7100, Extension 6, Kunene st',
        issue: `We are currently not load shedding . However if you are an Eskom customer 
        g  and  do not have electricity`,
        date: `03-08-2021 18:34`,
        solution:'false',
        resolve: [{
        _id: '15',
        image:M5,
        text: `please regidter on our app
        to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
        for downloading of all stage , including the extended stages 5-8, please click here`,
        date: `15-08-2021 18:34`,}]
    },
    {
        _id: '4',
        image:M4,
        location: 'River, Mfuleni, 7100, Extension 6, Kunene st',
        issue: `please regidter on our app
        to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
        for downloading`,
        date: `15-08-2021 18:34`,
        solution:'false',
        resolve: []
    },
    {
        _id: '5',
        image:M5,
        location: 'Cape Town, Mfuleni, 7100, Extension 6, Kunene st',
        issue: `We are currently not load shedding . However if you are an Eskom customer 
        g  and  do not have electricity`,
        date: `15-08-2021 18:34`,
        solution:'false',
        resolve: [{
            _id: '18',
            image:M6,
            text: `please regidter on our app
            to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
            for downloading of all stage , including the extended stages 5-8, please click here`,
            date: `15-08-2021 18:34`,
        }]
    },
    {
        _id: '6',
        image:M6,
        location: 'Bluedowns, Mfuleni, 7100, Extension 6, Kunene st',
        issue: `please regidter on our app
        to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
        for downloading`,
        date: `15-08-2021 18:34`,
        solution:'false',
        resolve: [{
            _id: '14',
            image:M1,
            text: `please regidter on our app
            to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
            for downloading of all stage , including the extended stages 5-8, please click here`,
            date: `15-08-2021 18:34`,
        }]
    },
    {
        _id: '7',
        image:M7,
        location: 'Stellenbotch, Mfuleni, 7100, Extension 6, Kunene st',
        issue: `We are currently not load shedding . However if you are an Eskom customer 
        g  and  do not have electricity`,
        date: `11-08-2021 18:34`,
        solution:'false',
        resolve: [{
            _id: '18',
            image:M2,
            text: `please regidter on our app
            to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
            for downloading of all stage , including the extended stages 5-8, please click here`,
            date: `15-08-2021 18:34`,
        }]
    },
    {
        _id: '8',
        image:M8,
        location: 'Cape Town, Mfuleni, 7100, Extension 6, Kunene st',
        issue: `please regidter on our app
        to log your fault, your montly account  from an mucipalaty load shedding  schedule advanced
        for downloading`,
        date: `15-08-2021 18:34`,
        solution:'false',
        resolve: []
    },
],
  
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
