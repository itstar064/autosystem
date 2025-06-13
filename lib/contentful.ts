const POSTS_GRAPHQL_FIELDS = `
  title
  slug
  excerpt
  date
  sys {
      id
      publishedAt
      firstPublishedAt
  }
  coverImage(preview: true) {
      url
  }
`;
const POST_GRAPHQL_FIELDS = `
        title
        slug
        excerpt
        date
        sys {
            id
            publishedAt
            firstPublishedAt
        }
        coverImage(preview: true) {
            url
        }
        content {
            json
            links {
                assets {
                    hyperlink {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                        sys {
                            id
                            spaceId
                            environmentId
                            publishedAt
                            firstPublishedAt
                            publishedVersion
                            locale
                        }
                    }
                    block {
                        title
                        description
                        contentType
                        fileName
                        size
                        url
                        width
                        height
                        sys {
                            id
                            spaceId
                            environmentId
                            publishedAt
                            firstPublishedAt
                            publishedVersion
                            locale
                        }
                    }
                }
            }
        }
`;

async function fetchGraphQL(query: string, preview = false): Promise<any> {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
      next: { tags: ["posts"] },
    },
  ).then((response) => response.json());
}

function extractPost(fetchResponse: any): any {
  return fetchResponse?.data?.postCollection?.items?.[0];
}

function extractPostEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.postCollection?.items;
}

function extractPostEntry(fetchResponse: any): any[] {
  return fetchResponse?.data?.post;
}

function extractOfferInfo(fetchResponse: any): any[] {
  return fetchResponse?.data?.offerInfoCollection?.items?.[0];
}

function extractOfferInfoEntries(fetchResponse: any): any[] {
  return fetchResponse?.data?.offerInfoCollection?.items;
}

export async function getPreviewPostBySlug(slug: string | null): Promise<any> {
  const entry = await fetchGraphQL(
    `query {
      postCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true,
  );
  return extractPost(entry);
}

export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
  const entries = await fetchGraphQL(
    `query {
      postCollection(preview: ${
        isDraftMode ? "true" : "false"
      }) {
        items {
          ${POSTS_GRAPHQL_FIELDS}
        }
      }
    }`,
    isDraftMode,
  );
  //console.log({entries})
  return extractPostEntries(entries);
}

export async function getPost(
  id:string,
  preview:boolean,
): Promise<any> {
  const entry = await fetchGraphQL(
    `query Post{
      post(
        id: "${id}", 
        preview: ${
          preview ? "true" : "false"
        }) {
          ${POST_GRAPHQL_FIELDS}
        }
    }`,
    preview,
  );
  //console.log({entry})
  return extractPostEntry(entry)
}
