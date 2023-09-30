import { ForumSection } from "@/components/forum-section";
import { HeroSection } from "@/components/hero-section";
import { VoteSection } from "@/components/vote-section";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between">
			<HeroSection />
			<VoteSection />
			<ForumSection />
		</main>
	);
}
