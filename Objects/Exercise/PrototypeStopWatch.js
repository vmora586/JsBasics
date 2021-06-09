/**
 * base in the last exercise file (StartWatch.js) try to move all the functions present inside the
 * constructor to the StopWatch prototype. This approach must be applied just in cases when dealing
 * with multiple instances of the same object. Despite of this is not the case, you will find out another
 * prblems regarding to the properties access level.
 */

//PREMATURE OPTIMIZATION IS THE ROOT OF ALL EVILS!!!!
//not posible without exposing internal busisness logic.
function StopWatch() {
  this.startTime, this.endTime, this.running, (this.duration = 0);
}

StopWatch.prototype.Start = function () {
  if (running) throw new error("The Stopwatch is already running");
  this.running = true;
  this.startTime = new Date();
};
