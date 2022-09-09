import React from "react";

class Aaron extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      apps: [
        {name: "Item"},
        {name: "Another item"}
      ]
    };
  }

  componentDidMount() {
      fetch("http://menu-api-uaaron.apps.tap.ullom.xyz/Appetizer")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            apps: result
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, apps } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {apps.map(item => (
            <li>
              {item.price} {item.name}: {item.description}
            </li>
          ))}
        </ul>
      );
    }
  }
}

export default Aaron;
