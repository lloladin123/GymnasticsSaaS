import CtaJoin from "@/components/CtaJoin";
import Benefits from "@/components/Index/Benefits";
import Services from "@/components/Index/Services";
import CommunityHightligt from "@/components/Index/CommunityHightligt";
import Testimonial from "@/components/Index/Testimonial";
import ContactForm from "@/components/ContactForm";
import RGVideo from "@/components/Videos/RGvideo";

export default function Home() {
  return (
    <>
      <main className="p-4">
        <h1 className="sr-only">Welcome to Gymnastic brand name</h1>
        <CtaJoin variants="hero"></CtaJoin>
        <div className="w-full mt-10 md:mt-0 max-h-screen overflow-hidden">
          <RGVideo />
        </div>
        <Benefits></Benefits>
        <Services></Services>
        <CommunityHightligt></CommunityHightligt>
        <Testimonial></Testimonial>
        <CtaJoin variants="card"></CtaJoin>
        <ContactForm></ContactForm>
      </main>
    </>
  );
}
