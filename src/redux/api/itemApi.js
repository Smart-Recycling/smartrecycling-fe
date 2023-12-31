import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const itemApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getItem: builder.query({
        query: () => ({
          url: `/items`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
      postItem: builder.mutation({
        query: ({ data }) => ({
          url: `/items`,
          method: "POST",
          body: {
            email: data.email,
            subject: data.subject,
            location: data.location,
            user_id: data.user_id,
          },
        }),
      }),
      putItem: builder.mutation({
        query: ({ itemId, data }) => ({
          url: `/items/${itemId}`,
          method: "PUT",
          body: data,
          headers: getUserAuthHeaderApi(),
        }),
      }),
    };
  },
});

export const { useGetItemQuery, usePostItemMutation, usePutItemMutation } = itemApi;
