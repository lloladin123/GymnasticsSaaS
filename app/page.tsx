import CtaJoin from "@/components/CtaJoin";
import Benefits from "@/components/Benefits";
import Services from "@/components/Services";
import CommunityHightligt from "@/components/CommunityHightligt";
import Testimonial from "@/components/Testimonial";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      <main className="p-4">
        <h1 className="sr-only">Welcome to Gymnastic brand name</h1>
        <CtaJoin variants="hero"></CtaJoin>
        <div className="w-full mt-10 md:mt-0 max-h-screen overflow-hidden">
          <video
            width="100%"
            height="auto"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover"
          >
            <source
              src="/videos/rgf_hovedfilm.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
            Your browser does not support your video tag.
          </video>
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
