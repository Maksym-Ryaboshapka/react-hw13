import { Component } from "react";
import Modal from "./components/Modal/Modal";
import { Button } from "./styles/App.styled";

export default class App extends Component {
  state = {
    isOpened: false,
    formData: {
      name: "",
      email: "",
      comment: "",
    },
  };

  componentDidUpdate = () => {
    if (this.state.isOpened) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }

    console.log(this.state.formData);
  };

  handleClick = () => {
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened,
    }));
  };

  handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.setState((prevState) => ({
        isOpened: !prevState.isOpened,
      }));
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const comment = form.elements.comment.value;

    this.setState({ formData: { name: name, email: email, comment: comment } });
    this.setState((prevState) => ({
      isOpened: !prevState.isOpened,
    }));

    form.reset();
  };

  render() {
    return (
      <div className="App">
        <Button onClick={this.handleClick}>Додати коментар</Button>

        {this.state.isOpened ? (
          <Modal
            backdropClick={this.handleBackdropClick}
            closeClick={this.handleClick}
            onSubmit={this.handleSubmit}
          />
        ) : null}
      </div>
    );
  }
}
