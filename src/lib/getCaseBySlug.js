export async function getCaseBySlug(slug) {
  const res = await fetch(`${process.env.WP_URL}/case?slug=${slug}`, {
    next: { revalidate: 5 },
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
