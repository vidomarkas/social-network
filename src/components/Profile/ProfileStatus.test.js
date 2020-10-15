import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  const testRenderer = create(<ProfileStatus status="it-kamasutra" />);
  const testInstance = testRenderer.root;

  //   test("status from props should be in the state", () => {
  //     const component = create(<ProfileStatus status="it-kamasutra.com" />);
  //     const instance = component.getInstance();
  //     expect(instance.state.status).toBe("it-kamasutra.com");
  // });

  test("after creation span should be displayed", () => {
    const span = testInstance.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation span should display correct status", () => {
    const span = testInstance.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra");
  });
});
