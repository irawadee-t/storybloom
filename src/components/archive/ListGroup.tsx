import { useState } from "react";

// Now using Props to insert list elements instead of hardcoding
// { items: [], heading: string }
interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; // onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // this function is a Hook - allows us to tap into built-in feature in react
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // arr[0] variable (selectedIndex)
  // arr[1] updater function
  return (
    // with Fragment, we don't have to use a div which adds another element in the DOM
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          // every item needs a key or else it will give error
          <li
            className={
              selectedIndex === index
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
