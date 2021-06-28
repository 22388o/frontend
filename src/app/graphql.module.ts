import { NgModule } from '@angular/core';
import { APOLLO_NAMED_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

export function createApollo(httpLink: HttpLink): Record<string, ApolloClientOptions<any>> {
  return {
    mirror: {
      link: httpLink.create({ uri: 'https://graph.mirror.finance/graphql' }),
      cache: new InMemoryCache(),
    },
    mirrorTest: {
      link: httpLink.create({ uri: 'https://tequila-graph.mirror.finance/graphql' }),
      cache: new InMemoryCache(),
    },
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_NAMED_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule { }
