const { SyncHook } = require('tapable');

class Car {
  constructor () {
    this.hooks = {
      accelerate: new SyncHook(['newSpeed'])
    };
  }
  run () {
    setTimeout(() => {
      this.hooks.accelerate.call()
    }, 1000)
  }
}

const myCar = new Car();

// Use the tap method to add a consument
myCar.hooks.accelerate.tap("WarningLampPlugin", () => console.log('WarningLampPlugin'));
myCar.hooks.accelerate.tap("LampPlugin", () => console.log('LampPlugin'));

myCar.run();
