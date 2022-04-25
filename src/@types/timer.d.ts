declare namespace Timer {

  interface TimerPenalty {
		type: 'DNF' | 'DNS' | '+2'
		amount?: number
	}
  interface TimerSettings {
    timerInput: 'manual' | 'timer' | 'stackmat';
    inspection: 'always' | 'never' | 'nonbld';
    timerUpdate: timerUpdate;
    timeToRelease: timeToRelease;
    targetComponentID: string;
  }
  interface InspectionOnlyTimerSettings {
    timeToRelease: timeToRelease;
    targetComponentID: string;
  }
  type timerUpdate =
    | 'seconds'
    | 'centiseconds'
    | 'milliseconds'
    | 'deciseconds'
    | 'none'
    | number; // a number means ever X seconds
  type timeToRelease = 'none' | 'stackmat';

}