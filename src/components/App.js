import React from "react";

class App extends React.Component {
  state = {
    second: 0,
    minute: 0,
    hour: 0,
    btnDisable: false,
    interval: "",
    intervalStop: [],
  };
  startClicked = () => {
    this.setState({ btnDisable: true });
    let timer = setInterval(() => {
      const { second, minute, hour } = this.state;
      if (second === 59) {
        if (minute === 59) {
          this.setState({
            second: 0,
            minute: 0,
            hour: hour + 1,
          });
        } else {
          this.setState({
            second: 0,
            minute: minute + 1,
          });
        }
      } else {
        this.setState({
          second: second + 1,
        });
      }
    }, 1000);
    this.setState({
      interval: timer,
    });
  };

  stopClicked = () => {
    clearInterval(this.state.interval);
    this.setState({
      btnDisable: false,
    });
  };

  intervalClicked = () => {
    const { hour, minute, second, intervalStop } = this.state;
    intervalStop.push(`${hour} : ${minute} : ${second}`);
    this.setState({
      intervalStop,
    });
  };

  clearClicked = () => {
    this.stopClicked();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      intervalStop: [],
    });
  };

  render() {
    const { second, minute, hour, btnDisable, intervalStop } = this.state;
    return (
      <div className="container w-50 mt-3">
        <div className="row">
          <div className="col-sm-12">
            <div className="card bg-info p-3">
              <h1 className="text-center">
                <span>Online</span> Stopwatch
              </h1>
              <div className="card-header bg-dark p-2">
                <div className="card-timers text-center">
                  <div className="timer-col">
                    <p className="timer-hours">{hour}</p>
                    <p className="timer-label">Hours</p>
                  </div>

                  <div className="timer-col">
                    <p className="timer-minutes">{minute}</p>
                    <p className="timer-label">Minutes</p>
                  </div>

                  <div className="timer-col">
                    <p className="timer-seconds">{second}</p>
                    <p className="timer-label">Seconds</p>
                  </div>
                </div>
              </div>
              <div className="card-body bg-dark">
                <div className="btn-group p-3">
                  <div className="timer-btn">
                    <button
                      className="btn btn-success"
                      onClick={this.startClicked}
                      disabled={btnDisable}
                    >
                      Start
                    </button>
                  </div>
                  <div className="timer-btn">
                    <button
                      className="btn btn-danger"
                      onClick={this.stopClicked}
                    >
                      Stop
                    </button>
                  </div>
                  <div className="timer-btn">
                    <button
                      className="btn btn-secondary"
                      onClick={this.intervalClicked}
                      disabled={!btnDisable}
                    >
                      Interval
                    </button>
                  </div>
                  <div className="timer-btn">
                    <button
                      className="btn btn-warning"
                      onClick={this.clearClicked}
                    >
                      Clear
                    </button>
                  </div>
                </div>
              </div>
              <div className="card-footer bg-dark  text-center">
                <div className="card bg-dark">
                  {intervalStop.map((item, index) => (
                    <p>
                      {index + 1}. &gt; {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
