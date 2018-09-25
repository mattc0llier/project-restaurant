import React from "react";
import Location from "./Location.js";
import MenuItem from "./MenuItem.js";

class App extends React.Component {
  render() {
    return (
      <div>
        <Location
          locationName="Got Buns hun"
          locationAddress="67, Hermitage road, Plymouth"
        />
        <MenuItem
          menuItemId="1"
          menuItemName="Cheeseburger"
          menuItemPrice="£3"
        />
      </div>
    );
  }
}

export default App;
