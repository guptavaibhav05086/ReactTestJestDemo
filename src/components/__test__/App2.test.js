import ReactDOM from "react-dom";
import React from "react";
import CommentBox from "../CommentBox";
import { shallow } from "enzyme";
import App from "../../App";
import CommentList from "../CommentList";

let wrapped;
beforeEach(() => {
  wrapped = shallow(<App />);
});

it("should show a comment box", () => {
  //const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
it("should show a comment List", () => {
  //const wrapped = shallow(<App />);
  expect(wrapped.find(CommentList).length).toEqual(1);
});
