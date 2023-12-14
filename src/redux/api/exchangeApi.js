import { getUserAuthHeaderApi } from "../apiHelper";
import { baseApi } from "../axiosBaseQuery";

export const exchangeApi = baseApi.enhanceEndpoints({}).injectEndpoints({
  endpoints(builder) {
    return {
      getExchange: builder.query({
        query: () => ({
          url: `/exchange`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
      getExchangeById: builder.query({
        query: (uuid) => ({
          url: `/exchange/${uuid}`,
          method: "GET",
          headers: getUserAuthHeaderApi(),
        }),
      }),
      postExchangeById: builder.mutation({
        query: ({ data }) => ({
          url: `/exchange`,
          method: "POST",
          body: {
            items_id: data.items_id,
            user_id: data.user_id,
          },
        }),
      }),
    };
  },
});

export const { useGetExchangeQuery, useGetExchangeByIdQuery, usePostExchangeByIdMutation } = exchangeApi;
