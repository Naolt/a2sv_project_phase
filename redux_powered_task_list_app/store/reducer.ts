import { Task } from "@/model";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: "api",
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  tagTypes: ["Task"],
  // The "endpoints" represent operations and requests for this server
  endpoints: (builder: any) => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getTasks: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => "/tasks",
      providesTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: (initialTask: Task) => ({
        url: "/tasks",
        method: "POST",
        body: initialTask,
      }),
      invalidatesTags: ["Task"],
    }),
    updateTask: builder.mutation({
      query: (initialTask: Task) => ({
        url: "/tasks",
        method: "PATCH",
        body: initialTask,
      }),
      invalidatesTags: ["Task"],
    }),
    deleteTask: builder.mutation({
      query: (toBeDeleted: Task) => ({
        url: "/tasks",
        method: "DELETE",
        body: toBeDeleted,
      }),
      invalidatesTags: ["Task"],
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} = apiSlice;
