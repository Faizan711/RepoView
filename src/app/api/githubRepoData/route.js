import axios from "axios";
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const repoOwner = searchParams.get("repoOwner");
  const repoName = searchParams.get("repoName");

  // const query = `
  //   query ($repoOwner: String!, $repoName: String!) {
  //     repository(owner: $repoOwner, name: $repoName) {
  //       stargazers {
  //         totalCount
  //       }
  //       forks {
  //         totalCount
  //       }
  //       issues(states: OPEN) {
  //         totalCount
  //       }
  //       pullRequests(states: OPEN) {
  //         totalCount
  //       }
  //       defaultBranchRef {
  //         target {
  //           ... on Commit {
  //             history {
  //               totalCount
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

  const query = `query ($repoOwner: String!, $repoName: String!) {
  repository(owner: $repoOwner, name: $repoName) {
    stargazers {
      totalCount
    }
    forks {
      totalCount
    }
    issues(states: OPEN) {
      totalCount
    }
    pullRequests(states: OPEN) {
      totalCount
    }
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 10) {
            edges {
              node {
                committedDate
                author {
                  user {
                    login
                  }
                }
                message
              }
            }
          }
        }
      }
    }
    licenseInfo {
      name
    }
    languages(first: 10) {
      edges {
        node {
          name
        }
        size
      }
    }
  }
}
`;

  try {
    const response = await axios.post(
      "https://api.github.com/graphql",
      {
        query,
        variables: { repoOwner, repoName },
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      }
    );

    return new Response(JSON.stringify(response.data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch repo data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
