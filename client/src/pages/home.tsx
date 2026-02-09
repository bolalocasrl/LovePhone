import { Phone, Battery, Smartphone, Wrench, MapPin, Clock, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-repair.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="font-display font-bold text-xl tracking-tighter">
            LOVE PHONE GOYA
          </div>
          <a href="tel:911429862">
            <Button className="hidden md:flex bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-6">
              <Phone className="mr-2 h-4 w-4" />
              911 429 862
            </Button>
            <Button size="icon" className="md:hidden rounded-none">
              <Phone className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </nav>

      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="flex flex-col justify-center space-y-8">
                <div className="space-y-4">
                  <h1 className="text-4xl font-display font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl leading-[0.9]">
                    YOUR PHONE <br />
                    <span className="text-muted-foreground">DESERVES LOVE.</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Professional smartphone repair in the heart of Salamanca, Madrid. 
                    Fast, reliable, and transparent service.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <a href="tel:911429862" className="w-full sm:w-auto">
                    <Button size="lg" className="w-full sm:w-auto rounded-none text-lg h-14 px-8 bg-black text-white hover:bg-neutral-800 transition-colors">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: 911 429 862
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" onClick={scrollToContact} className="w-full sm:w-auto rounded-none text-lg h-14 px-8 border-2 hover:bg-muted">
                    Visit Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
                    Open Now
                  </div>
                  <div className="w-px h-4 bg-border"></div>
                  <div>No Appointment Needed</div>
                </div>
              </div>
              
              <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden bg-muted">
                 <img 
                  src={heroImage} 
                  alt="Smartphone Repair Workbench" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                />
                <div className="absolute inset-0 border border-border/10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-24 bg-muted/30 border-b border-border">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-start gap-4 mb-12">
              <h2 className="text-3xl font-display font-bold tracking-tighter sm:text-4xl md:text-5xl">
                OUR SERVICES
              </h2>
              <p className="text-muted-foreground md:text-lg max-w-[600px]">
                We specialize in quick turnarounds and high-quality parts for all major brands.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-3">
              {/* Service 1 */}
              <div className="group relative overflow-hidden bg-background p-8 border border-border hover:border-black transition-colors duration-300">
                <div className="mb-4 inline-block p-3 bg-muted">
                  <Smartphone className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Screen Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Cracked screen? We replace displays for iPhone, Samsung, Xiaomi, and more using premium parts.
                </p>
                <div className="w-8 h-[2px] bg-border group-hover:bg-black transition-colors"></div>
              </div>

              {/* Service 2 */}
              <div className="group relative overflow-hidden bg-background p-8 border border-border hover:border-black transition-colors duration-300">
                <div className="mb-4 inline-block p-3 bg-muted">
                  <Battery className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Battery Replacement</h3>
                <p className="text-muted-foreground mb-4">
                  Extend your phone's life with a fresh battery. Service often completed in under 30 minutes.
                </p>
                <div className="w-8 h-[2px] bg-border group-hover:bg-black transition-colors"></div>
              </div>

              {/* Service 3 */}
              <div className="group relative overflow-hidden bg-background p-8 border border-border hover:border-black transition-colors duration-300">
                <div className="mb-4 inline-block p-3 bg-muted">
                  <Wrench className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">General Repair</h3>
                <p className="text-muted-foreground mb-4">
                  Charging ports, cameras, water damage, and software issues. Diagnostics available.
                </p>
                <div className="w-8 h-[2px] bg-border group-hover:bg-black transition-colors"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <h2 className="text-3xl font-display font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  VISIT US
                </h2>
                <div className="space-y-6 text-lg">
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Love Phone Goya</p>
                      <p className="text-muted-foreground">Calle de Goya, 113</p>
                      <p className="text-muted-foreground">Salamanca, 28009 Madrid</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <Phone className="h-6 w-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Call Us</p>
                      <a href="tel:911429862" className="text-xl underline decoration-2 underline-offset-4 hover:text-muted-foreground transition-colors">
                        911 429 862
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="h-6 w-6 mt-1 shrink-0" />
                    <div>
                      <p className="font-bold">Opening Hours</p>
                      <p className="text-muted-foreground">Mon - Fri: 10:00 - 20:00</p>
                      <p className="text-muted-foreground">Sat: 10:00 - 14:00</p>
                      <p className="text-muted-foreground">Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-[400px] bg-muted border border-border relative group overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/15/16145/12437.png')] bg-cover bg-center grayscale opacity-60 group-hover:grayscale-0 transition-all duration-500"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                   <div className="bg-black text-white px-4 py-2 text-sm font-bold shadow-xl">
                     📍 WE ARE HERE
                   </div>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Calle+de+Goya+113+Madrid" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                  aria-label="Open Map"
                ></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">
            © {new Date().getFullYear()} Love Phone Goya. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm hover:underline">Privacy Policy</a>
            <a href="#" className="text-sm hover:underline">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
