import profileReducer, { addPost, deletePost } from "./profileReducer";

const state = {
  posts: [
    { id: 1, message: "This is a post" },
    { id: 2, message: "This is a post number 2" },
    { id: 3, message: "This is a post number 3" },
    { id: 4, message: "This is a post number 4" },
  ],
};

test("length of posts should increment", () => {
  //1. Test data
  let action = addPost("bla bla post");

  //2. Action
  let newState = profileReducer(state, action);
  //3. Expectation
  expect(newState.posts.length).toBe(5);
});
test("message of new post should be", () => {
  //1. Test data
  let action = addPost("bla bla post");

  //2. Action
  let newState = profileReducer(state, action);
  //3. Expectation
  expect(newState.posts[4].message).toBe("bla bla post");
});

// TDD
test("posts length after deleting post should be decremented", () => {
  //1. Test data
  let action = deletePost(1);
  //2. Action
  let newState = profileReducer(state, action);
  //3. Expectation
  expect(newState.posts.length).toBe(3);
});
test("after deleting posts length should not be decremented if id is wrong", () => {
  //1. Test data
  let action = deletePost(1000);
  //2. Action
  let newState = profileReducer(state, action);
  //3. Expectation
  expect(newState.posts.length).toBe(4);
});
