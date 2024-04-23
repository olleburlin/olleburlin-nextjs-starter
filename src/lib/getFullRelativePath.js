async function getParentPost(parentID) {
  try {
    const response = await fetch(
      `${process.env.WP_URL}/pages?parent=${parentID}&acf_format=standard`
    );
    const parentPost = await response.json();
    return parentPost;
  } catch (error) {
    console.error("Error fetching parent post:", error);
    return null;
  }
}

export async function getFullRelativePath(postObject) {
  let fullPath = postObject.post_name;
  let parent = postObject.post_parent;

  while (parent !== 0) {
    let parentPost = await getParentPost(parent);
    if (parentPost) {
      fullPath = parentPost.post_name + "/" + fullPath;
      parent = parentPost.post_parent;
    } else {
      break;
    }
  }

  return fullPath;
}
