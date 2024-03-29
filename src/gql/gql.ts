/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query MyQuery {\n    pageContent(where: { id: \"clkwsyp6d93ip0auv8sc9obo8\" }) {\n      pageContentHome {\n        ... on PageHero {\n          heroHeading\n          heroText\n          heroImage {\n            fileName\n            url\n          }\n        }\n        ... on PageSkill {\n          skills {\n            ... on Skill {\n              pageSkillSubTitle\n              skillTitle\n            }\n          }\n        }\n        ... on PageContact {\n          contactText\n          contactTitle\n        }\n        ... on PageProject {\n          id\n          projects {\n            ... on Project {\n              projectShowButtons\n              projectImage {\n                url\n              }\n              projectTitle\n              projectTag\n              website\n              github\n              id\n              projectDetailPage {\n                projectDescription\n                projectSubTitle\n                techStack {\n                  ... on ProgrammingLanguage {\n                    programminglanguage\n                  }\n                }\n              }\n              caterogy\n              showTwoImages\n            }\n          }\n        }\n      }\n    }\n  }\n": types.MyQueryDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query MyQuery {\n    pageContent(where: { id: \"clkwsyp6d93ip0auv8sc9obo8\" }) {\n      pageContentHome {\n        ... on PageHero {\n          heroHeading\n          heroText\n          heroImage {\n            fileName\n            url\n          }\n        }\n        ... on PageSkill {\n          skills {\n            ... on Skill {\n              pageSkillSubTitle\n              skillTitle\n            }\n          }\n        }\n        ... on PageContact {\n          contactText\n          contactTitle\n        }\n        ... on PageProject {\n          id\n          projects {\n            ... on Project {\n              projectShowButtons\n              projectImage {\n                url\n              }\n              projectTitle\n              projectTag\n              website\n              github\n              id\n              projectDetailPage {\n                projectDescription\n                projectSubTitle\n                techStack {\n                  ... on ProgrammingLanguage {\n                    programminglanguage\n                  }\n                }\n              }\n              caterogy\n              showTwoImages\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query MyQuery {\n    pageContent(where: { id: \"clkwsyp6d93ip0auv8sc9obo8\" }) {\n      pageContentHome {\n        ... on PageHero {\n          heroHeading\n          heroText\n          heroImage {\n            fileName\n            url\n          }\n        }\n        ... on PageSkill {\n          skills {\n            ... on Skill {\n              pageSkillSubTitle\n              skillTitle\n            }\n          }\n        }\n        ... on PageContact {\n          contactText\n          contactTitle\n        }\n        ... on PageProject {\n          id\n          projects {\n            ... on Project {\n              projectShowButtons\n              projectImage {\n                url\n              }\n              projectTitle\n              projectTag\n              website\n              github\n              id\n              projectDetailPage {\n                projectDescription\n                projectSubTitle\n                techStack {\n                  ... on ProgrammingLanguage {\n                    programminglanguage\n                  }\n                }\n              }\n              caterogy\n              showTwoImages\n            }\n          }\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;