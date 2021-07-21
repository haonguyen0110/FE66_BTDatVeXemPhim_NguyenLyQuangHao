import React, { Fragment } from 'react'
import './BaiTapDatVe.styles.css'
import ThongTinDat from './ThongTinDat'
import danhSachGhe from './Data/danhSachGhe.json'
import HangGhe from './HangGhe'
export default function BaiTapDatVe(props) {

    const renderHangGhe = () => {
        return danhSachGhe.map((hangGhe, index) => {
            return <div key={index} >
                <HangGhe hangGhe={hangGhe} soHangGhe={index} />
            </div>
        })
    }
    return (
        <div className="bookingMovie">
            <div className="overlay">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-8 col-12">
                            <h1 className="text-warning text-center mt-3">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
                            <div className="mt-3 text-white text-center" style={{ fontSize: '25px', fontWeight: '900' }}>Màn hình</div>
                            <div className="d-flex flex-column justify-content-center mt-1">
                                <div className="screen ml-5"></div>
                                <div style={{position:'relative'}}>

                                    {renderHangGhe()}
                                </div>

                            </div>
                            <div >

                            </div>

                        </div>

                        <div className="col-lg-4 col-12">
                            <h2 className="text-white text-center mt-3" style={{ fontSize: 35 }}>DANH SÁCH GHẾ BẠN CHỌN</h2>
                            <ThongTinDat />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
