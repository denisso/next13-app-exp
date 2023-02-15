import { metaTags } from "@/data";

export const metadata = {
  title: metaTags.solutions.title,
  description: metaTags.solutions.description,
  keywords: metaTags.solutions.keywords,
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function Page (){
  return <>Solutions page</>
} 