import './base.css';
import React from 'react';
import ReactDOM from 'react-dom';

// 加载script
const loadScripts = () => new Promise((resolve, reject) => {
  const script = document.createElement('script');
  script.src = 'http://127.0.0.1:8080/testFederation.js';
  script.type = "text/javascript";
  script.async = true;
  script.onload = function () {
    resolve();
  };
  script.onerror = reject;
  document.head.appendChild(script)
});
const User = React.lazy(() => import('remoteHost/User'));
// const Total = React.lazy(() => import('remoteHost/Total'));
const Person = React.lazy(() => getComponent('./Person'));
const getComponent = async (name, scope = 'federation', childName) => {
  // 初始化
  // 共享模块；例如共享react
  await __webpack_init_sharing__('default');

  const container = window[scope];
  
  await container.init(__webpack_share_scopes__.default);

  const factory = await container.get(name);
  
  return childName ? factory()[childName] : factory();
}
// console.log(User)


;(async () => {
  // await loadScripts();
  // const ModuleComponent = await getComponent('./Total', undefined, 'Person');
  // console.log(ModuleComponent)
  // todo: React.lazy
})();

const CmpMap = {};
const Noop = () => ('')
class Test extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }
  async componentDidMount () {
    const res = await getComponent('./Total', undefined);
    Object.assign(CmpMap, res);
    this.setState({})
  }
  render () {
    const User2 = CmpMap['User'] || Noop;
    const Person2 = CmpMap['Person'] || Noop;
    return (
      <div>
        <div>
          kdklldle
        </div>
        <React.Suspense fallback='loading'>
          <User/>
          <Person />
          <User2 />
          <Person2 />
        </React.Suspense>
      </div>
    )
  }
}

const node = document.getElementById('app');
// ReactDOM.render(<div><React.Suspense fallback='loading'><User /></React.Suspense></div>, node)
ReactDOM.render(<div><Test /></div>, node)
