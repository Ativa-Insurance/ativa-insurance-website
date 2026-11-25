// Homepage. Server wrapper: loads the live blog posts for the tips section,
// then renders the client homepage (Personal / Commercial views, pop-ups).

import HomeClient from "./HomeClient";
import { getTips } from "@/content/blog";

export default async function Page() {
  const tips = await getTips();
  return <HomeClient tips={tips} />;
}
