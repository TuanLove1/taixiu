const initialState = {
    userList: [
        {
            id: 1,
            fullname: "Dinh Phuc Nguyen",
            username: "dpnguyen",
            email: "dpnguyen@gmail.com",
            phoneNumber: "123456789",
            type: "VIP"
        },
        {
            id: 2,
            fullname: "Nguyen Van A",
            username: "vana",
            email: "vana@gmail.com",
            phoneNumber: "123456789",
            type: "USER"
        }
    ],
    userEdit: null,
    keyWords: "",
}
const userReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "DELETE_USER": {
            console.log(action);
            const userList = [...state.userList];
            const index = userList.findIndex((user) => user.id === action.payload.id)
            if (index !== -1) {
                userList.splice(index, 1);
            }
            state.userList = userList;
            console.log(state.userList);
            // xoa user
            return { ...state };
        }
        case "SAVE_USER": {
            console.log(action);
            const userList = [...state.userList];
            if (action.payload.id) {
                //update
                const index = userList.findIndex((user) => user.id === action.payload.id)
                if (index !== -1) {
                    userList[index] = action.payload;
                }
            } else {
                //add
                const userNew = { ...action.payload, id: new Date().getTime() };
                userList.push(userNew);
            }

            state.userList = userList;
            return { ...state };

        }
        case "EDIT_USER": {
            console.log(action);
            state.userEdit = action.payload;
            return { ...state }
        }
        case "GET_KEYWORD": {
            console.log(action);
            state.keyWords = action.payload;
            return { ...state }
        }
        default:
            return { ...state };

    }
}
export default userReducer;