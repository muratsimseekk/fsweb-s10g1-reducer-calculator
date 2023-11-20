import React from 'react';

import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import { useReducer } from 'react';
import reducer, { initialState } from './reducers';
import { addOne , applyNumber , changeOperation ,clearDisplay ,totalMemory , memToTotal ,memoryClear} from './actions';


function App() {

  
  const [state , dispatchState] = useReducer ( reducer,initialState);

  // const onClick = ()=> {
  //     dispatchState(addOne());
  // }

  const operationClick = (operation) => {
    dispatchState(changeOperation(operation.target.value))
  }

  const applyClick = (sayi) => {
    dispatchState(applyNumber(parseInt(sayi.target.value)));
  }

  const clearClick = () => {
    dispatchState(clearDisplay())
  }

  const totalMemClick = (e) => {
    dispatchState(totalMemory())
  }

  const memToTotalClick = () => {
      // total = state.memory
      // console.log(total);
      dispatchState(memToTotal())
  }

  const memClearClick = () => {
    dispatchState(memoryClear())
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">

            <TotalDisplay value={state.total} />
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>

            <div className="row">
              <CalcButton value={"M+"} onClick={totalMemClick}/>
              <CalcButton value={"MR"} onClick={memToTotalClick}/>
              <CalcButton value={"MC"} onClick={memClearClick}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={applyClick}/>
              <CalcButton value={2} onClick={applyClick}/>
              <CalcButton value={3} onClick={applyClick}/>
            </div>

            <div className="row">
              <CalcButton value={4} onClick={applyClick}/>
              <CalcButton value={5} onClick={applyClick}/>
              <CalcButton value={6} onClick={applyClick}/>
            </div>

            <div className="row">
              <CalcButton value={7} onClick={applyClick}/>
              <CalcButton value={8} onClick={applyClick}/>
              <CalcButton value={9} onClick={applyClick}/>
            </div>

            <div className="row">
              <CalcButton value={"*"} onClick={operationClick}/>
              <CalcButton value={"-"} onClick={operationClick}/>
              <CalcButton value={"+"} onClick={operationClick}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={clearClick} />
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
