/**
 * This class must return an object which contains three methods:
 * Start()
 * Stop()
 * Reset()
 * As well as a property call duration.
 * If you try to start the stopWatch when it is already started, it must throw an exception. The same behaviour if you
 * try to stop when it is not yet running.
 * Duration property counts the time elapsed betwen the Start() event until the Stop() one. This value must keep tracking that values
 * until the Reset() method is called.
 */

function StopWatch() {
  let starTime,
    endTime,
    running,
    duration = 0;

  this.Start = function () {
    if (running) throw new Error("Stopwatch is already running");

    running = true;
    starTime = new Date();
  };

  this.Stop = function () {
    if (!running) throw new Error("Stopwatch is already stopped");

    running = false;
    endTime = new Date();
    duration = (endTime.getTime() - starTime.getTime()) / 1000;
  };

  this.Reset = function () {
    starTime = endTime = null;
    duration = 0;
    running = false;
  };

  Object.defineProperty(this, "Duration", {
    get() {
      return duration;
    },
  });
}
