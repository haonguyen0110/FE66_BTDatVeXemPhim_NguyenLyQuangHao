import React,{useState} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { chonGhe } from '../../redux/action/DatGheAction';
export default function HangGhe(props) {
    const {dsGheDangChon} = useSelector(state => state.DatVeReducer)
    const dispatch=useDispatch();
    const renderGhe = () => {
        return props.hangGhe.danhSachGhe.map((ghe, index) => {

           
            
            let cssGheDaDat = '';
            let disabled = false
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
                disabled = true;
            }

          
           
            let cssGheDangChon='';
            let indexGheDangChon = dsGheDangChon.findIndex(gheDangChon=>gheDangChon.soGhe === ghe.soGhe)
            
            if(indexGheDangChon !== -1){
                cssGheDangChon =' gheDangChon'
            }
            return <button onClick={()=>{
                dispatch(chonGhe(ghe))
            }} disabled={disabled} style={{ cursor: 'pointer' }} className={`ghe ${cssGheDaDat} ${cssGheDangChon}`} key={index}>
                {index + 1}
            </button>
            
        })
        
    }

    const renderSoHang =()=>{
        return props.hangGhe.danhSachGhe.map((hang,index)=>{
            return <button className="rowNumber">
                {hang.soGhe}
            </button>
        })
    }
    const renderHangGhe =()=>{
        if(props.soHangGhe===0){
            return <div className="ml-4">
                {props.hangGhe.hang} {renderSoHang()}
            </div>
        }else{
            return <div>
                {props.hangGhe.hang} {renderGhe()}
            </div>
        }
    }

    
    return (
        <div className="text-white text-left ml-5 pl-5 mt-2" style={{ fontSize: 30 }}>
            {renderHangGhe()} 
        </div>
    )
}
