import { MouseEvent, useState } from "react";

//Difference between props and state
/* PROPS: 
  - Input passed to a component
  - Similar to function args
  - Treat them as Immutable - DO NOT change them in the component as it is considered anti-pattern
  - Cause a re-render of the component

  STATE:
  - Data is managed by component
  - Similar to local variable
  - Treat them as Mutable
  - Cause a re-render of the component
*/

//Using the props, we can pass the data to our components
interface ListGroupProps {
  items: string[];
  heading: string;
  //passing the function as prop which takes string as parameter and returns nothing, void function.
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
  //let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  //Using useState function of react, which returns an array of 2 elements - "state value or variable" and "updater function" to update the state/variable.
  //useState is a hook. A hook is a function that allows us to tap into built-in features in react so this is called statehook. There are other hooks as well.
  //Using state hook, we are telling the react that this component can have data or state that will change over time.
  //When the updater function updates the state or variable, react updates the DOM (under the hood) with new value. We actually never touch the DOM, it is done through components.
  //Every component has their own state. Try adding two times ListGroup component.
  //Follow below name convention for variable and updater function.
  let [selectedIndex, setSelectedIndex] = useState(-1);

  //Event handler
  // let handleClick = (event: MouseEvent) => {
  //   console.log(event);
  // };

  return (
    <>
      {/*This is React Fragment short syntax or use <Fragment> tag from React*/}
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
