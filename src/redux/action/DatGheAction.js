import {CHON_GHE} from './type/DatGheType'
import { HUY_GHE } from './type/DatGheType'


export const chonGhe = ghe => {
    return {

        type: CHON_GHE,
        ghe
    }
}

export const huyGhe=ghe=>{
    return{
        type:HUY_GHE,
        ghe
    }
}