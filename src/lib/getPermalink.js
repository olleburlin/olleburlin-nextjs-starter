export async function getPermalink(pageId) {
  try {
    const response = await fetch(`${process.env.WP_URL}/pages/${pageId}`);
    const data = await response.json();
    let { slug, parent } = data;

    let permalink = `/${slug}`;

    // Traverse the parent pages to construct the full relative path
    while (parent !== 0) {
      const parentResponse = await fetch(
        `${process.env.WP_URL}/pages/${parent}`
      );
      const parentData = await parentResponse.json();
      const { slug: parentSlug, parent: grandparent } = parentData;
      permalink = `/${parentSlug}${permalink}`;
      parent = grandparent;
    }

    return permalink;
  } catch (error) {
    console.error("Error:", error);
    // Handle error
  }
}
