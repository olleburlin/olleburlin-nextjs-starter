export async function getPages() {
  const res = await fetch(`${process.env.WP_URL}/pages?per_page=99`, {
    next: { revalidate: 60 },
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
