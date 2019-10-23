import React, { Component } from "react";

export const CardContext = React.createContext();

class ContextProvider extends Component {
  state = {
    somestate: true
  };

  render() {
    return (
      <CardContext.Provider
        value={{
          state: this.state,
          updateSomeState: () => {
            this.setState(prevState => ({ somestate: !prevState.somestate }));
          }
        }}
      >
        {this.props.children}
      </CardContext.Provider>
    );
  }
}

export default ContextProvider;
//export const CardConsumer = FamilyContext.Consumer;
