import LockUp from "../components/LockUp";
import ThankYouContent from "../components/ThankYouContent";
import ThankYouHero from "../components/ThankYouHero";

export default function ThankYouPage() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <LockUp />
      <ThankYouHero />
      <ThankYouContent />
    </div>
  );
}
