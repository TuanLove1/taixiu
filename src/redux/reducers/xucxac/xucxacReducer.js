const stateDefault = {
    taiXiu: false,
    mangXucXac: [
        {
            ma: 1,
            hinhAnh: './img/6.png',
        },
        {
            ma: 1,
            hinhAnh: './img/5.png',
        },
        {
            ma: 1,
            hinhAnh: './img/4.png',
        },
    ],
    soBanThang: 0,
    soTranChoi: 0,
}

const xucxacReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DAT_CUOC": {
            state.taiXiu = action.payload;
            return { ...state };
        }
        case "PLAY_GAME": {
            let mangXucXacRandom = [];
            for (let i = 0; i < 3; i++) {
                let soNgauNhien = Math.floor(Math.random() * 6 + 1);
                let xucXacRanDom = {
                    ma: soNgauNhien,
                    hinhAnh: `./img/${soNgauNhien}.png`,
                }
                mangXucXacRandom.push(xucXacRanDom);
            }
            state.mangXucXac = mangXucXacRandom;
            state.soTranChoi += 1;
            let tongDiem = mangXucXacRandom.reduce((total,xucxac)=>{
                return total += xucxac.ma;
            },0)
            if(tongDiem > 11 && state.taiXiu === true || tongDiem <=11 && state.taiXiu== false){
                state.soBanThang += 1;
            }
            return { ...state }
        }
        default: return { ...state };
    }
}
export default xucxacReducer;