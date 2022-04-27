import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import useKeyboardTimer, { useInspectionOnlyTimer } from '../src/';
import { useState } from 'react';

const settings = {
  timerInput: 'timer',
  inspection: 'always',
  timerUpdate: 'deciseconds',
  timeToRelease: 'stackmat',
  targetComponentID: 'timer'
};

const App = () => {
  return (
    <div id="timer">
      <Timer  />
    </div>
  );
};

const Timer = () => {
  const [times, setTimes] = useState<number[]>([]);
  function onCompleteCallback(time) {
    setTimes([...times, time]);
  }
  const {
    time,
    state,
    dnf,
    inspectionTime,
    isTiming,
    plusTwo,
  } = useKeyboardTimer(settings, onCompleteCallback);

  return (
    <>
      <div>
        {`Time: ${time} \n State: ${state} \n Inspection: ${inspectionTime} \n DNF: ${dnf} \n Plus 2: ${plusTwo}`}
      </div>
      <br />
      <br />
      <ul>
        {times.map((time, index) => (
          <li key={index}>{`${index+1}. ${time} ms`}</li>
        ))}
      </ul>
    </>
  )
}

const InspectionTimer = () => {
  const {
    inspectionTime,
    isInspecting,
    state
  } = useInspectionOnlyTimer({timeToRelease: 'stackmat', targetComponentID: 'timer'});

  return (
    <>
      <div>
        {`Inspection time: ${inspectionTime} \n State: ${state} \n isInspecting: ${isInspecting}`}
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
