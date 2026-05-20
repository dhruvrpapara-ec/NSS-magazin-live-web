export function EditorDesk() {
  return (
    <section className="bg-secondary/20 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Editor’s Desk</p>
          <h2 className="font-serif text-4xl text-foreground sm:text-5xl">
            Reflections on Service
          </h2>
        </div>
        
        <div className="mx-auto text-lg text-muted-foreground leading-relaxed space-y-6">
          <h3 className="font-serif text-2xl text-foreground mb-6">The Heart of NSS: Words from the Editor</h3>
          
          <p>Dear Readers,</p>
          <p>
            As I pen down these words, I feel immense pride and gratitude. Designing the very first edition of the CHARUSAT NSS Magazine, "NSS- सेवा, समर्पण, सफलता," has been a remarkable journey—one that has deeply intensified my understanding of the true spirit of NSS. This chronicle is not just a compilation of events and statistics; it is a living testament to the dedication and selfless service of every volunteer who has contributed to society in ways both big and small.
          </p>
          <p>
            For me, NSS is more than an organization; it is a way of life. Our guiding motto, "Not Me, But You," has profoundly shaped my perspective, teaching me that true success lies in collective service. Every act of kindness, no matter how small, carries the potential to ignite lasting change. Through this digital platform, I hope to inspire more young minds to embrace selfless dedication and continue this journey of community transformation.
          </p>
          <p>
            The experience of bringing this magazine to life has been both challenging and fulfilling—demanding long hours of meticulous formatting, curation, and creative exploration. Every page reflects the unyielding enthusiasm and commitment of our volunteers. I hope that as you turn these digital pages, you will feel the same sense of purpose and fulfillment that we did while capturing our history.
          </p>
          
          <div className="my-10 border-l-4 border-primary pl-6 py-6 italic bg-card rounded-r-lg shadow-sm space-y-4">
            <p>
              From the early sunrise, we stand tall and bright,<br/>
              Serving with smiles, spreading the light.
            </p>
            <p>
              From villages to cities, wherever we go,<br/>
              Planting the seeds of change, watching them grow.
            </p>
            <p>
              Through camps and drives, we lend a hand,<br/>
              Lifting spirits, building the land.
            </p>
            <p>
              "Not me, but you" — we live by this way,<br/>
              Together we shine, come what may.
            </p>
          </div>
          
          <p>
            My heartfelt gratitude goes to our mentor, Mr. Kishan Patel (NSS Program Coordinator, CHARUSAT), for his unwavering guidance and encouragement throughout this project.
          </p>
          <p>
            The journey of service never ends. It continues in every project we layout and every life we touch. We proudly present to you the first-ever NSS Magazine of CHARUSAT—may it inspire you to serve with passion.
          </p>
          
          <div className="mt-12 pt-8 border-t border-border">
            <p className="font-serif text-xl text-foreground">With warm regards and unwavering NSS spirit,</p>
            <div className="mt-4 flex flex-col items-start">
              <img 
                src="/Editorial.png" 
                alt="Editor Signature" 
                className="h-48 w-auto object-contain mb-4 mix-blend-multiply" 
              />
              <p className="font-medium text-foreground text-lg">Mr. Dhruv Rupapara</p>
              <p className="text-sm mt-1">Editor - NSS– सेवा, समर्पण, सफलता</p>
              <p className="text-sm">Chairperson - NSS Task Force</p>
              <p className="text-sm">B. Tech (EC) - CSPIT</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
