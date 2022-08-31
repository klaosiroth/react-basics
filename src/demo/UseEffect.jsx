import React from 'react';

// Making API calls
export default function DemoUseEffect() {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0);

  console.log('Component rendered');

  // fetch('https://swapi.dev/api/people/1')
  //   .then((res) => res.json())
  //   .then((data) => setStarWarsData(data));

  // side effects
  // React.useEffect(function () {
  //   console.log('Effect ran');
  //   fetch('https://swapi.dev/api/people/1')
  //     .then((res) => res.json())
  //     .then((data) => setStarWarsData(data));
  // }, []);

  /**
   * Challenge: Combine `count` with the request URL
   * so pressing the "Get Next Character" button will
   * get a new character from the Star Wars API.
   * Remember: don't forget to consider the dependencies
   * array!
   */
  React.useEffect(() => {
    console.log('Effect ran');
    fetch(`https://swapi.dev/api/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);

  /**
   * Challenge: re-write the useEffect
   * It should run any time `count` changes
   * For now, just console.log("Effect function ran")
   */
  React.useEffect(() => {
    console.log('Effect function ran');
  }, [count]);

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>Add</button>
    </div>
  );
}
