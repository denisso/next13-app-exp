import { metaTags } from "@/data";

export const metadata = {
  title: metaTags.services.title,
  description: metaTags.services.description,
  keywords: metaTags.services.keywords,
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function Page (){
  return <>Service page</>
} 