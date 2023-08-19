export const GET_PAGE_CONTENT = `
query MyQuery {
  pageContent(where: {id: "clkwsyp6d93ip0auv8sc9obo8"}) {
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
            caterogy
            showTwoImages
          }
        }
      }
    }
  }
}`;
