
import { useEffect, useState, memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

// Memoized team member card for better performance
const TeamMemberCard = memo(({ member }: { member: { name: string, position: string, image: string, specialty: string } }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-xl h-full">
    <div className="aspect-[3/4] bg-gray-200 dark:bg-gray-700 overflow-hidden">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover object-center"
        loading="lazy"
      />
    </div>
    <div className="p-6 text-center">
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-lawyer-red mb-2">{member.position}</p>
      <p className="text-muted-foreground text-sm">{member.specialty}</p>
    </div>
  </div>
));

// Team members data moved outside component to avoid recreation on each render
const teamMembers = [
  {
    name: "أحمد اليوسفي",
    position: "المؤسس والمحامي الرئيسي",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop",
    specialty: "قانون مدني وتجاري",
  },
  {
    name: "محمد الصالحي",
    position: "محامي ومستشار قانوني",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=800&auto=format&fit=crop",
    specialty: "قانون الشركات",
  },
  {
    name: "فاطمة العمري",
    position: "محامية متخصصة في القانون المدني",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
    specialty: "قانون الأحوال الشخصية",
  },
  {
    name: "سعيد الهاشمي",
    position: "محامي متخصص",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop",
    specialty: "قانون العقارات",
  }
];

const TeamSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="team" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-lawyer-dark">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block px-4 py-2 bg-lawyer-red/10 text-lawyer-red rounded-full text-sm font-semibold mb-4">فريق العمل</span>
          <h2 className="section-title">فريقنا القانوني المتميز</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            فريق متكامل من المحامين ذوي الخبرة والكفاءة العالية في مختلف المجالات القانونية
          </p>
        </div>

        {mounted && (
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="mx-auto max-w-5xl"
          >
            <CarouselContent className="py-4">
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <TeamMemberCard member={member} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-0 translate-y-0 bg-lawyer-red hover:bg-lawyer-red/90 text-white" />
              <CarouselNext className="relative inset-0 translate-y-0 bg-lawyer-red hover:bg-lawyer-red/90 text-white" />
            </div>
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
