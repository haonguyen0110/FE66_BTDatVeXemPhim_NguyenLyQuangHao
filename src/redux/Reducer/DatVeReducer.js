

const stateDefault ={
    dsGheDangChon: [
      
    ]
}

export const DatVeReducer =(state = stateDefault,action)=>{
    switch(action.type){
        case 'CHON_GHE':{
            let dsGheDangChonUpdate = [...state.dsGheDangChon];
            let index = dsGheDangChonUpdate.findIndex(gheDangChon=>gheDangChon.soGhe === action.ghe.soGhe)
            if(index !== -1){
                dsGheDangChonUpdate.splice(index,1);
            }else{
                dsGheDangChonUpdate.push(action.ghe)
            }
            state.dsGheDangChon=dsGheDangChonUpdate
            return {...state}
        }

        case 'HUY_GHE':{
            let dsGheDangChonUpdate = [...state.dsGheDangChon];
            let index =dsGheDangChonUpdate.findIndex(gheDangChon=>gheDangChon.soGhe === action.ghe.soGhe)
            if(index !== -1){
                dsGheDangChonUpdate.splice(index,1)
            }
            state.dsGheDangChon=dsGheDangChonUpdate
            return {...state}
        }
        default: return {...state}
    }
}