import { Fragment, useEffect, useMemo, useState } from 'react';

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [state, setState] = useState({
    name: '',
    selected: false,
    age: 20,
    city: '',
  });

  const user = useMemo(
    () => ({
      name: state.name,
      selected: state.selected,
    }),
    [state.name, state.selected]
  );

  useEffect(() => {
    console.log('useEffect runs!');
    setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, [1000]);

    return () => {
      clearInterval();
    };
  }, []);

  // fetch
  // useEffect(() => {
  //   const controller = new AbortController();
  //   const signal = controller.signal;

  //   fetch(`url`, { signal })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setState(data);
  //     })
  //     .catch((error) => {
  //       if (error.name === 'AbortError') {
  //         console.log('cancelled!');
  //       } else {
  //         // todo: handle error
  //       }
  //     });

  //   return () => {
  //     controller.abort();
  //   };
  // }, []);

  // axios
  // useEffect(() => {
  //   console.log('useEffect mount');
  //   const cancelToken = axios.CancelToken.source();

  //   axios
  //     .get(`url`, { cancelToken: cancelToken.token })
  //     .then((response) => setState(response.data))
  //     .catch((error) => {
  //       if (axios.isCancel(error)) {
  //         console.log('cancelled!');
  //       } else {
  //         // todo: handle error
  //       }
  //     });

  //   return () => {
  //     console.log('useEffect unmount');
  //     cancelToken.cancel();
  //   };
  // }, []);

  useEffect(() => {
    console.log('The state has changed, useEffect runs!');
  }, [user]);

  const handleAdd = () => {
    setState((prevState) => ({ ...prevState, name }));
  };
  const handleSelect = () => {
    setState((prevState) => ({ ...prevState, selected: true }));
  };

  console.count('component rendered!');
  return (
    <Fragment>
      <h2>UseEffectHook</h2>
      <div>{count}</div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={handleAdd}>Add name</button>
      <button onClick={handleSelect}>Add name</button>
      {`{name: ${state.name}, selected: ${state.selected.toString()}}`}
    </Fragment>
  );
}

export default UseEffectHook;
