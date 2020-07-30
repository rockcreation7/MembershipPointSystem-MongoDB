import React from "react"
import renderer from "react-test-renderer"
import PageSuccess from "../pages/PageSuccess"
import { Provider } from 'react-redux'
import store from '../store'

it("renders correctly", () => {
  const tree = renderer.create(
    <Provider store={store}>
      <PageSuccess />
    </Provider>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})
