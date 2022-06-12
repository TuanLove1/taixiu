import React, { Component } from 'react'
import { connect } from 'react-redux'
class XucXac extends Component {

  renderMangXucXac = () => {
    const { mangXucXac } = this.props;
    return mangXucXac.map((xucxac,index) => {
      return <img key={index} className='ml-2' style={{ width: 50, height: 50 }} src={xucxac.hinhAnh} alt='1.png'></img>
    })
  }

  render() {
    return (
      <div>
        {this.renderMangXucXac()}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.xucxacReducer.mangXucXac,
  }
}
export default connect(mapStateToProps, null)(XucXac);