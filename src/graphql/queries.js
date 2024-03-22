import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const apolloClient = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache()
});

export const getAllRecipes = async () => {
    const query = gql`
        query {
            recipes {
                title
            }
        }
    `;
    const { data } = await apolloClient.query({ query });
    return data.recipes;
};
