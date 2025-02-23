import { HomePage } from "@app/types";
import { H2 } from "@app/components";

interface StatisticsSectionProps {
  statistics: HomePage["statistics"];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <section className="bg-[#f97316] text-white py-12 mt-12 mb-12">
      <div
        className="flex flex-wrap justify-center gap-16"
        style={{ color: "#ffffff" }}
      >
        {statistics.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-5xl text-white font-extrabold">{stat.value}</p>
            <H2 className="text-lg text-white font-light">
              {stat.description}
            </H2>
          </div>
        ))}
      </div>
    </section>
  );
};

export { StatisticsSection };
