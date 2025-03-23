export async function fetchWordPressPosts() {
  const wpApiUrl = import.meta.env.WORDPRESS_API_URL;
  try {
    const response = await fetch(`https://wp.phnompenhreview.com/wp-json/wp/v2/posts`);
    return await response.json();
  } catch (error) {
    console.error("❌ Error fetching WordPress posts:", error);
    return [];
  }
}


