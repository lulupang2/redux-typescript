
//state
import {configureStore} from "@reduxjs/toolkit";

const 초기상태 = {
    카운터: 0,
    텍스트: '',
    리스트: [],
};
//액션 타입 정의
const 증가 = 'INCREASE';
const 감소 = 'DECREASE';
const 텍스트변경 = 'CHANGE_TEXT';
const 추가 = 'ADD_TO_LIST';

//액션 생성 함수
const increase = () => ({type: 증가})
const decrease = () => ({type: 감소})
const changeText = (텍스트: string) => ({type: 텍스트변경, 텍스트});
const addToList = (리스트: any) => ({type: 추가, 리스트})

//액션 타입 선언
type CounterAction =
    | ReturnType<typeof increase>
    | ReturnType<typeof decrease>
    | ReturnType<typeof changeText>
    | ReturnType<typeof addToList>

//리듀서
function reducer(상태 = 초기상태, 액션: CounterAction) {
    switch (액션.type) {
        case 증가:
            return {
                ...상태,
                카운터: 상태.카운터 + 1
            };
        case 감소:
            return {
                ...상태,
                카운터: 상태.카운터 - 1
            }
        case 텍스트변경:
            return {
                ...상태,
                텍스트: 상태.텍스트
            };
        // case 추가:
        //     return {
        //         ...상태,
        //         리스트: 상태.리스트.concat(액션.리스트)
        //     };
        default:
            return 상태;
    }
}

//스토어
const store = configureStore({reducer});
console.log(store.getState())  // getStore -> store 안에 있는 상태 조회

const listener = () => {
    const state = store.getState();
    console.log(state)
}
const unsubscribe = store.subscribe(listener);
