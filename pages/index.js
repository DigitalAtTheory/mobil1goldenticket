import Content from "../components/Content";
import Form from "../components/Form";
import HeroImage from "../components/HeroImage";
import LockUp from "../components/LockUp";

export default function Home() {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <LockUp />
      <HeroImage />
      <Content />
      <Form />
    </div>
  );
}
