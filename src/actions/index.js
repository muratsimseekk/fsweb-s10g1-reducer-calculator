export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";

export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'

export const TOTAL_MEMORY = 'TOTAL_MEMORY'

export const MEM_TO_TOTAL = 'MEM_TO_TOTAL'

export const MEMORY_CLEAR = 'MEMORY_CLEAR'


export const addOne = () => {
  return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
  return ({ type: APPLY_NUMBER, payload: number });
}

export const changeOperation =(operation) => {
  return ({type : CHANGE_OPERATION , payload: operation })
}

export const clearDisplay =() => {
  return ({type : CLEAR_DISPLAY })
}

export const totalMemory = () => {
  return ({type : TOTAL_MEMORY}) 
}

export const memToTotal = () => {
  return ({type: MEM_TO_TOTAL})
}

export const memoryClear = () => {
  return ({type : MEMORY_CLEAR})
}
