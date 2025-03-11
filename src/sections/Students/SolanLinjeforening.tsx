import { SolanLinjeforeningPage } from "@app/types";
import { H1, H2 } from "@app/components/Typography";

interface SolanLinjeforeningProps {
  data: SolanLinjeforeningPage;
}

export function SolanLinjeforening({ data }: SolanLinjeforeningProps) {
  // Function to extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11
      ? `https://www.youtube.com/embed/${match[2]}`
      : null;
  };

  const videoEmbedUrl = getYouTubeEmbedUrl(data.video);

  return (
    <section className="w-full max-w-3xl mx-auto px-4 md:px-0">
      {/* Title with orange underline */}
      <div className="mb-8">
        <H1 className="mb-2">{data.title}</H1>
        <div className="h-1 w-16 bg-[#f97316]" />
      </div>

      {/* Description with link */}
      <p className="text-gray-600 mb-12">
        {data.description}{" "}
        <a
          href={data.solanUrl}
          className="text-[#f97316] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          klikk her
        </a>
        .
      </p>

      {/* Video section */}
      <div className="mb-8">
        <div className="mb-4">
          <H2>{data.videoTitle}</H2>
          <div className="h-1 w-16 bg-[#f97316]" />
        </div>        
        {videoEmbedUrl && (
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={videoEmbedUrl}
              title={data.videoTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </section>
  );
}
