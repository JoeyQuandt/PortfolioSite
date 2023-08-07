export const GET_PAGE_CONTENT = `
query getPageContent {
    pageContent(where: { id: "clkwsyp6d93ip0auv8sc9obo8" }) {
      pageContentHome {
        ... on PageHero {
          heroHeading
          heroText
          heroImage {
            fileName
            url
          }
        }
        ... on PageSkill {
          skills {
            ... on Skill {
              pageSkillSubTitle
              skillTitle
            }
          }
        }
        ... on PageContact {
          contactText
          contactTitle
        }
        ... on PageProject {
          projects {
            ... on Project {
              projectShowButtons
              projectImage {
                url
              }
              projectTitle
              projectTag
              website
              github
            }
          }
        }
      }
    }
  }
  
`;
