import ReactDOM from "react-dom";
import React from "react";
import CommentBox from "../CommentBox";
import { shallow } from "enzyme";
import App from "../../App";
import CommentList from "../CommentList";

it("should show a comment box", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App></App>, div);
  console.log(div.innerHTML);
  //expect(div.innerHTML).toContain("Comment Box");
  ReactDOM.unmountComponentAtNode(div);
});
it("should show a comment box", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
  //ReactDOM.unmountComponentAtNode(div);
});
it("should show a comment List", () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
