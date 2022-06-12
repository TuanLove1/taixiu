import React, { Component } from 'react'
import "./gamestyle.css"
import ThongTinTroChoi from './thongtintrochoi';
import XucXac from './xucxac';
import { connect } from 'react-redux';
class GameXucXac extends Component {
    render() {
        console.log(this.props.datCuoc);
        return (
            <div>
                <div className='game '>
                    <h3 className='text-center mt-5' >
                        GAME ĐỔ XÚC XẮC
                    </h3>
                    <div className='row text-center'>
                        <div className='col-5'>

                            <button onClick={()=>{this.props.datCuoc(true)}}  className='taixiu'>TÀI</button>
                        </div>
                        <div className='col-2'>
                            <XucXac />
                        </div>
                        <div className='col-5'>
                            <button onClick={()=>{this.props.datCuoc(false)}} className='taixiu'>XỈU</button>
                        </div>
                    </div>
                    <div className='text-center'>
                        <ThongTinTroChoi />
                        <button onClick={()=>{
                            this.props.playGame();
                        }} className='btn btn-success'>Play game</button>

                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        datCuoc: (taiXiu) => {
            let action = {
                type: "DAT_CUOC",
                payload:taiXiu,
            }
            dispatch(action)
        },
        playGame: () => {
            let action = {
                type:"PLAY_GAME",
            }
            dispatch(action)
        }
    }
}
export default connect(null, mapDispatchToProps)(GameXucXac)