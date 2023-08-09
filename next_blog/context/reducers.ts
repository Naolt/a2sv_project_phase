import { Blog } from "@/model";

// Define the action types for your reducer
type Action =
  | { type: "Add_Blog"; payload: Blog }
  | { type: "Edit_Blog"; payload: any }
  | { type: "Delete_Blog"; payload: string };

//reducers
const addBlog = (state: Blog[], blog: Blog) => {
  console.log("add blog", blog);
  return [...state, blog];
};
const editBlog = (state: Blog[], id: string, blog: Blog) => {
  return state.map((current) => {
    if (current.id.toString() === id.toString()) {
      return blog;
    }
    return current;
  });
};
const deleteBlog = (state: Blog[], id: string) => {
  console.log(id);
  return state.filter((blog) => blog.id.toString() !== id.toString());
};

// Create your reducer function
export const appReducer = (state: Blog[], action: Action): Blog[] => {
  switch (action.type) {
    case "Add_Blog":
      console.log("added", addBlog(state, action.payload));
      return addBlog(state, action.payload);
    case "Edit_Blog":
      //to be implemented
      return editBlog(state, action.payload.id, action.payload.blog);
    case "Delete_Blog":
      console.log(action);
      // to be implemented using the payload which is id
      return deleteBlog(state, action.payload);
    default:
      return state;
  }
};
