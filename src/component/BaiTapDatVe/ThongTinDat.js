import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { huyGhe } from '../../redux/action/DatGheAction';

export default function ThongTinDat() {

    const { dsGheDangChon } = useSelector(state => state.DatVeReducer);

    const dispatch= useDispatch()
    return (
        <div className="mt-5">
            <div>
                <div className="d-flex align-items-center">
                    <button className="gheDuocChon"></button> <span className="text-light ml-2" style={{ fontWeight: 700, fontSize: 25 }}>Ghế đã đặt : </span>
                </div>
                <div className="d-flex align-items-center mt-4">
                    <button className="gheDangChon"></button> <span className="text-light ml-2" style={{ fontWeight: 700, fontSize: 25 }}>Ghế đang chọn :
                    {dsGheDangChon.map((ghe,index)=>{
                        return <span className="text-danger" key={index}> {ghe.soGhe},</span>
                    })} </span>
                </div>
                <div className="d-flex align-items-center mt-4">
                    <button className="gheDangChon" style={{ background: 'white', border: 'none' }}></button> <span className="text-light ml-2" style={{ fontWeight: 700, fontSize: 25 }}>Ghế chưa đặt : </span>
                </div>
            </div>

            <div className="mt-5">
                <table className="table table-striped table-bordered table-dark text-center " >
                    <thead className="thead-dark">
                        <tr className="text-light">
                            <th>Só ghế</th>
                            <th>Giá</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="text-warning">
                        {dsGheDangChon.map((gheDangChon, index) => {
                            return <tr key={index}>
                                <td>{gheDangChon.soGhe}</td>
                                <td>{gheDangChon.gia.toLocaleString()}</td>
                                <td><button onClick={()=>{
                                    dispatch(huyGhe(gheDangChon))
                                }} className="btn btn-danger">X</button></td>
                            </tr>
                        })}
                    </tbody>
                    <tfoot>
                        <tr className="text-warning">
                            <td></td>
                            <td className="text-danger">Tổng tiền</td>
                            <td className="text-white">
                                {dsGheDangChon.reduce((tongTien,gheDangChon,index)=>{
                                    return tongTien += gheDangChon.gia
                                },0).toLocaleString()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </div>
    )
}
