export const GET_PAGE_CONTENT = `
query MyQuery {
  pageContent(where: {id: ${process.env.NEXT_PUBLIC_PAGE_ID}}) {
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
        id
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
            id
            projectDetailPage {
              projectDescription
              projectSubTitle
              techStack {
                ... on ProgrammingLanguage {
                  programminglanguage
                }
              }
            }
          }
        }
      }
    }
  }
}
`;
