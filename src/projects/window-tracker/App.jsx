import React from 'react';
import WindowTracker from './WindowTracker';

// export default class App extends React.Component {
//   state = {
//     show: true,
//   };

//   toggle = () => {
//     this.setState((prevState) => ({ show: !prevState.show }));
//   };

//   render() {
//     console.log('Render');
//     return (
//       <div className="container">
//         <button onClick={this.toggle}>Toggle WindowTracker</button>
//         {this.state.show && <WindowTracker />}
//       </div>
//     );
//   }
// }

export default function App() {
  /**
   * Challenge:
   * 1. Create state called `show`, default to `true`
   * 2. When the button is clicked, toggle `show`
   * 3. Only display `<WindowTracker>` if `show` is `true`
   */

  const [show, setShow] = React.useState(true);

  function toggle() {
    setShow((prevShow) => !prevShow);
  }

  return (
    <div className="container">
      <button onClick={toggle}>Toggle WindowTracker</button>
      {show && <WindowTracker />}
    </div>
  );
}
