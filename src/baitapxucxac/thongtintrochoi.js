import React, { Component } from 'react'
import { connect } from 'react-redux'
class ThongTinTroChoi extends Component {
  render() {
    const { taiXiu, soBanThang, soTranChoi } = this.props;
    return (
      <div>
        <div className='display-4'>BẠN CHỌN:
          <span className='text-danger'>{taiXiu?"Tài":"Xỉu"}</span>
        </div>
        <div className='display-4'>BÀN THẮNG:
          <span className='text-success'>{soBanThang}</span>
        </div>
        <div className='display-4'>TỔNG SỐ BÀN CHƠI:
          <span className='text-primary'>{soTranChoi}</span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    taiXiu: state.xucxacReducer.taiXiu,
    soBanThang: state.xucxacReducer.soBanThang,
    soTranChoi: state.xucxacReducer.soTranChoi,
  }
}
export default connect(mapStateToProps, null)(ThongTinTroChoi)
