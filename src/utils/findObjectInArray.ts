import { PageContentpageContentHomeUnion } from '@/gql/graphql';

export const findObjectInArray = <T extends PageContentpageContentHomeUnion>(
  arr: PageContentpageContentHomeUnion[],
  name: string,
): T | undefined => {
  return arr.find(item => item?.__typename === name) as T | undefined;
};
