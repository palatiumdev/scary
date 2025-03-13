import Video from "@/components/Video/Video";
import { FaTwitter, FaDiscord } from "react-icons/fa6";

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 py-16">
      <div className="max-w-4xl w-full px-4 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-primary">Elevate Editing Shop</h1>
          <p className="text-xl">
            Check out our curated collection of editing resources and tools
          </p>
        </div>

        {/* Shop Video Section */}
        <div className="aspect-video w-full rounded-2xl overflow-hidden bg-BGaccent">
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Shop Introduction"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="flex justify-center">
          <a 
            href="https://elevateediting.shop" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-primary text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-primary/80 transition-colors"
          >
            Visit Shop
          </a>
        </div>
      </div>
    </main>
  );
} 