import React from "react";

import { Input } from "reactstrap";

interface InputSectionProps {
  value: null | string;
  onChange: (value: string) => void;
  images: Array<any> | null | undefined;
  files: Array<any> | null | undefined;
}
const InputSection = ({
  value,
  onChange,
  images,
  files,
}: InputSectionProps) => {
  return (
    <div className="position-relative">
      {images && images.length ? (
        <div className="text-secondary font-size-12 mb-1">
          You have selected {images.length} images
        </div>
      ) : null}
      {files && files.length ? (
        <div className="text-secondary font-size-12 mb-1">
          You have selected {files.length} attachments
        </div>
      ) : null}

      <Input
        type="text"
        className="form-control form-control-lg chat-input"
        id="chat-input"
        placeholder="Type your message..."
        value={value || ""}
        onChange={(e: any) => {
          onChange(e.target.value);
        }}
        autoComplete="off"
      />
    </div>
  );
};
export default InputSection;
