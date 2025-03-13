import { HomePage } from "@app/types";
import { FullWidthContainer } from "@app/components/FullWidhtContainter";

interface StatisticsSectionProps {
  statistics: HomePage["statistics"];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <FullWidthContainer bgColor="bg-[#f97316]">
      <section className="text-white py-12 mt-8 mb-8">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full max-w-6xl mx-auto"
          style={{ color: "#ffffff" }}
        >
          {statistics.map((stat, index) => (
            <div key={index} className="flex flex-col items-center w-60">
              <p className="text-3xl md:text-5xl text-white font-extrabold mb-4">
                {stat.value}
              </p>
              <p className="text-lg text-white leading-tight font-bold">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </FullWidthContainer>
  );
};

export { StatisticsSection };
