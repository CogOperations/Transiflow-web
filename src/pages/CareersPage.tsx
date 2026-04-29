import {
  Briefcase,
  CheckCircle2,
  Code,
  Database,
  Globe,
  Heart,
  Palette,
  Users,
} from "lucide-react";
import Banner from "../components/common/Banner";
import Card from "../components/common/Card";
import CardGrid from "../components/common/CardGrid";
import PrimaryButton from "../components/common/Button";
import Section from "../components/common/Section";

const CareersPage = () => {
  return (
    <>
      <Banner
        title="Build Transiflow with us."
        subtitle="We're looking for passionate people who believe in building something meaningful — even before it's perfect."
        className="bg-linear-to-br from-blue-50 to-purple-50"
      />

      <Section
        title="Current Openings"
        description="Volunteer Roles — Remote"
        className="max-w-7xl mx-auto px-6"
      >
        <CardGrid>
          <JobCard
            icon={<Code size={32} />}
            title="React Native Mobile Developer"
            description="Build the mobile app that will transform how millions travel across Africa. Work with React Native, TypeScript, and modern mobile development practices."
            skills={[
              "React Native",
              "TypeScript",
              "Mobile Development",
              "API Integration",
            ]}
          />
          <JobCard
            icon={<Database size={32} />}
            title="Backend Developer"
            description="Design and build robust APIs and server infrastructure. Experience with Node.js or Django preferred."
            skills={[
              "Node.js or Django",
              "REST APIs",
              "Database Design",
              "Cloud Services",
            ]}
          />
          <JobCard
            icon={<Palette size={32} />}
            title="UI/UX Designer"
            description="Create beautiful, intuitive interfaces that make safety and travel management feel effortless."
            skills={["Figma", "User Research", "Prototyping", "Mobile Design"]}
          />
          <JobCard
            icon={<CheckCircle2 size={32} />}
            title="QA / Tester"
            description="Ensure quality and reliability across all features. Help us build a platform users can trust."
            skills={[
              "Testing",
              "Attention to Detail",
              "Bug Tracking",
              "User Perspective",
            ]}
          />
        </CardGrid>
      </Section>
      <Section
        title="What You Get"
        description="More than just experience — join a mission-driven team"
        className="max-w-7xl mx-auto px-6"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            title="Real Project Experience"
            icon={<Briefcase />}
            description="Work on a live product that will impact thousands of lives"
            variant="benefit"
            color="blue"
          />
          <Card
            icon={<Users />}
            title="Strong Portfolio"
            description="Build impressive work samples that stand out to employers"
            variant="benefit"
            color="blue"
          />
          <Card
            icon={<Globe />}
            title="Fully Remote"
            description="Work from anywhere with flexible hours"
            variant="benefit"
            color="blue"
          />
          <Card
            icon={<Heart />}
            title="Mission-Driven Team"
            description="Collaborate with passionate people solving real problems"
            variant="benefit"
            color="blue"
          />
        </div>
      </Section>
      <Banner
        title="Ready to make an impact?"
        subtitle="Send us your resume and a brief note about why you want to join Transiflow."
        className="bg-linear-to-br to-primary from-secondary-100 text-white"
      >
        <PrimaryButton
          label="Apply Now"
          className="text-primary bg-white"
          onClick={() => {
            window.location.href = "mailto:transiflow93@gmail.com";
          }}
        />
        <p className="mt-6 text-sm opacity-75">
          Email us at: transiflow93@gmail.com
        </p>
      </Banner>
      {/* Culture */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-900 mb-6">
              Why Join Transiflow?
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">
                  Solve Real Problems
                </h3>
                <p className="text-gray-600">
                  Transportation safety is a critical challenge across Africa.
                  Your work will directly impact people's daily lives and
                  safety.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">
                  Build Something Meaningful
                </h3>
                <p className="text-gray-600">
                  Join a project at the ground level and help shape the future
                  of mobility in Africa.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-lg flex items-center justify-center">
                <CheckCircle2 />
              </div>
              <div>
                <h3 className="text-xl text-gray-900 mb-2">Grow Your Skills</h3>
                <p className="text-gray-600">
                  Work with modern technologies, learn from peers, and gain
                  experience that will accelerate your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
function JobCard({
  icon,
  title,
  description,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  skills: string[];
}) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-blue-400 hover:shadow-lg transition-all">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-2xl text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="space-y-2 mb-6">
        <p className="text-sm text-gray-500">Key Skills:</p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button
        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
        onClick={() => {
          window.location.href = "mailto:transiflow93@gmail.com";
        }}
      >
        Apply for this role
      </button>
    </div>
  );
}

export default CareersPage;
