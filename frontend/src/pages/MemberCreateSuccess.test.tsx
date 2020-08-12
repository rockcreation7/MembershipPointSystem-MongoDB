import React from "react"
import renderer from "react-test-renderer"
import MemberCreateSuccess from "./MemberCreateSuccess"
import { Provider } from 'react-redux'
import {store} from '../store'

it("renders correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <MemberCreateSuccess />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
