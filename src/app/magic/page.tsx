import RepoSearchContainer from "@/components/RepoSearchContainer";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'GitHub Repo Search',
};

export default function MagicPage() {
  return (
    <div className="lg:w-6/12 w-full min-h-[100vh]">
      <RepoSearchContainer />
    </div>
  )
}
