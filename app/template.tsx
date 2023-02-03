import { Template as ComponentTemplate } from "@/components/Template";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
      <ComponentTemplate>{children}</ComponentTemplate>
  );
}