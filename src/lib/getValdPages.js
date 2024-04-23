export async function getValdPages() {
  const res = await fetch(
    `${process.env.WP_URL}/pages?parent=66&acf_format=standard&_fields=title,acf,slug&per_page=15`,
    {
      next: { revalidate: 600 },
    }
  );

  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
