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
  disable send button
  */
  const [disabled, setDisabled] = useState<boolean>(false);

  /*
  input text
  */
  const [text, setText] = useState<null | string>(null);
  const onChangeText = (value: string) => {
    setText(value);

    if (value)
      setDisabled(false);
    else {
      setDisabled(true);
    }
  };

  /*
  images
  */
  const [images, setImages] = useState<Array<any> | null | undefined>();
  const onSelectImages = (images: Array<any>) => {
    setImages(images);
  };

  const onSubmit = () => {
    let data: any = {};
    if (text) {
      data['text'] = text;
    }
    if (images && images.length) {
      const imgs = (images || []).map((i: any, key: number) => {
        const src = URL.createObjectURL(i);
        return {
          id: key,
          downloadLink: src
        };
      });
      data['image'] = imgs;
    }
    setText("");
    setImages(null);
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
            <InputSection value={text} onChange={onChangeText} images={images} />
          </div>
          <div className="col-auto">
            <EndButtons onSubmit={onSubmit} disabled={disabled} />
          </div>
        </div>
      </Form>

      <MoreMenu isOpen={isOpen} onSelectImages={onSelectImages} onToggle={onToggle} />
      <Reply />
    </div>
  );
};

export default Index;
