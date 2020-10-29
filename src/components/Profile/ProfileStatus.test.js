import React from "react";
import { create, act } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  const testRenderer = create(<ProfileStatus status="it-kamasutra" />);
  const testInstance = testRenderer.root;

  test("after creation span should be displayed", () => {
    const span = testInstance.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation span should display correct status", () => {
    const span = testInstance.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra");
  });
  test("input should be displayed in edit mode instead of span", () => {
    const span = testInstance.findByType("span");
    act(() => {
      span.props.onDoubleClick();
    });
    const input = testInstance.findByType("input");
    expect(input.props.value).toBe("it-kamasutra");
  });
  test("callback should be called", () => {
    const mockCallback = jest.fn();
    const testRenderer = create(
      <ProfileStatus status="it-kamasutra" updateStatus={mockCallback} />
    );
    const testInstance = testRenderer.root;
    console.log("testInstance :>> ", testInstance);
    testInstance.deactivateEditMode();
    expect(mockCallback.mock.calls).toBe(1);
  });
});
