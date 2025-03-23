import { fetchWordPressPosts } from "../../lib/fetchWordPress.ts";

export async function get() {
  const res = await fetch('https://wp.phnompenhreview.com/wp-json/wp/v2/posts');
  const posts = await res.json();
  return new Response(JSON.stringify(posts));
}
