import React from "react";

interface IndexProps {
  children: any;
}
const Index = (props: IndexProps) => {
  return (
    <div>
      <h2>Welcome to Layout</h2>
      {props.children}
    </div>
  );
};

export default Index;
