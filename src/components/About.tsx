import { Heart, Users, Award, Shield, Activity, Droplets, PawPrint, Tent } from "lucide-react";

const values = [
  { icon: Heart, title: "सेवा (Service)", text: "Empowering underprivileged communities through 24+ cleanliness drives, mega blood donation camps, and rural development initiatives across 15+ adopted villages." },
  { icon: Shield, title: "समर्पण (Dedication)", text: "Fostering compassion and ethical values through continuous animal welfare rescues, environmental tree plantations, and health awareness campaigns." },
  { icon: Award, title: "सफलता (Success)", text: "Nurturing active citizenship, critical life skills, and student leadership framework standard worthy of an institutional publication." },
];

const metrics = [
  { icon: Droplets, title: "Blood Donation", text: "500+ units of life-saving blood collected across 4 successful drives in collaboration with the Red Cross." },
  { icon: Activity, title: "Cleanliness Drives", text: "24+ massive sanitation campaigns reaching public spaces, schools, and temples in 15+ villages." },
  { icon: Tent, title: "Annual Camps", text: "7-day residential bootcamps hosted at Alindra Village (2023-24) and Laval Village (2024-25) directly benefiting over 5,000+ villagers." },
  { icon: PawPrint, title: "Animal Rescue", text: "Over 60+ distressed animals (including puppies, birds, and wildlife) rescued and rehabilitated over 2 years." },
  { icon: Users, title: "Traffic Awareness", text: "5,000+ safe driving pledges secured during campus safety campaigns." },
];

export function About() {
  return (
    <section id="about" className="bg-background py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="max-w-2xl">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">About the Edition</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            A chronicle of selfless service, documented by volunteers, for the community.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The CHARUSAT NSS Magazine, "NSS– सेवा, समर्पण, सफलता," is a meticulously curated publication capturing the extensive social impact, rural outreach, and leadership development activities undertaken during the Academic Years 2023–2025. This digital edition preserves the original publication layout while making our collective journey of nation-building accessible on any device.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="glass-card rounded-[2rem] p-8 transition-transform hover:-translate-y-2">
              <v.icon className="h-8 w-8 text-primary" />
              <h3 className="mt-6 font-serif text-2xl text-foreground">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="font-serif text-4xl text-foreground mb-10 text-center">Key Highlights & Impact</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {metrics.map((v) => (
              <div key={v.title} className="glass-card rounded-[2rem] p-8 transition-transform hover:-translate-y-2">
                <v.icon className="h-8 w-8 text-primary" />
                <h4 className="mt-6 font-serif text-xl text-foreground">{v.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-8 rounded-[2rem] glass-card p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Version 1</p>
            <p className="mt-3 text-2xl font-serif text-foreground">Name of the Magazine : <br className="sm:hidden" />NSS– सेवा, समर्पण, सफलता</p>
          </div>
          
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">NSS Program Coordinator</p>
            <p className="mt-2 font-serif text-2xl text-foreground">Mr. Kishan Patel</p>
          </div>
          
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Editor, Designer</p>
            <p className="mt-2 font-serif text-2xl text-foreground">Dhruv Rupapara</p>
            <p className="text-muted-foreground mt-1">B.Tech (EC), CSPIT</p>
          </div>
        </div>
      </div>
    </section>
  );
}
