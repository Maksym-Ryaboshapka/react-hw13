import { Component } from "react";
import {
  Backdrop,
  ModalDiv,
  Title,
  SvgDiv,
  Form,
  List,
  Item,
  Label,
  Span,
  Input,
  Textarea,
  Button,
} from "./styles/Modal.styled";
import { RxCross2 as CrossIcon } from "react-icons/rx";

export default class Modal extends Component {
  render() {
    return (
      <Backdrop onClick={this.props.backdropClick}>
        <ModalDiv>
          <Title>Ваш коментар</Title>
          <SvgDiv onClick={this.props.closeClick}>
            <CrossIcon style={{width: "100%", height: "100%"}} />
          </SvgDiv>
          <Form onSubmit={this.props.onSubmit}>
            <List>
              <Item>
                <Label>
                  <Span>Ім'я</Span>
                  <Input name="name" required />
                </Label>
              </Item>
              <Item>
                <Label>
                  <Span>Пошта</Span>
                  <Input type="email" name="email" required />
                </Label>
              </Item>
              <Item>
                <Label>
                  <Span>Коментар</Span>
                  <Textarea name="comment" required />
                </Label>
              </Item>
            </List>
            <Button type="submit">Відправити</Button>
          </Form>
        </ModalDiv>
      </Backdrop>
    );
  }
}
