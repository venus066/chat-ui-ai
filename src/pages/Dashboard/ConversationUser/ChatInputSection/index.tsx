import React, { useState } from "react";

// components
import StartButtons from "./StartButtons";
import InputSection from "./InputSection";
import EndButtons from "./EndButtons";
import MoreMenu from "./MoreMenu";
import Reply from "./Reply";
import { Form } from "reactstrap";
interface IndexProps {
  onSend: (data: any) => void;
}
const Index = ({ onSend }: IndexProps) => {
  /*
  more menu collapse
  */
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  /*
  input text
  */
  const [text, setText] = useState<null | string>("");
  const onChangeText = (value: string) => {
    setText(value);
  };

  const onSubmit = () => {
    const data = {
      text: text,
    };
    setText("");
    onSend(data);
  };

  return (
    <div className="chat-input-section p-3 p-lg-4">
      <Form
        id="chatinput-form"
        onSubmit={(e: any) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <div className="row g-0 align-items-center">
          <div className="col-auto">
            <StartButtons
              onToggle={onToggle}
              text={text}
              onChange={onChangeText}
            />
          </div>
          <div className="col">
            <InputSection value={text} onChange={onChangeText} />
          </div>
          <div className="col-auto">
            <EndButtons onSubmit={onSubmit} />
          </div>
        </div>
      </Form>

      <MoreMenu isOpen={isOpen} />
      <Reply />
    </div>
  );
};

export default Index;
