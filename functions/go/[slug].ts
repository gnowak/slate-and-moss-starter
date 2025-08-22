// Cloudflare Pages Function: /go/:slug -> registry redirect with 302
import links from '../_shared/links.json';

export const onRequestGet: PagesFunction = async (context) => {
  const slug = context.params.slug as string;
  const dest = (links as Record<string, string>)[slug];
  if (!dest) {
    return new Response('Unknown link', { status: 404 });
  }
  return Response.redirect(dest, 302);
};
