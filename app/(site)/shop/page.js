import Video from "@/components/Video/Video";
import { FaTwitter, FaDiscord } from "react-icons/fa6";

export default function Shop() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-16 py-16 px-5 lg:px-16">
      <h1 className="text-5xl text-primary font-bold">Shop</h1>
      
      <div className="w-full max-w-4xl grid gap-8">
        {/* Video Section */}
        <div className="aspect-video w-full">
          <Video src="Scary Promo.mp4" />
        </div>

        {/* Description */}
        <div className="prose prose-invert max-w-none">
          <p className="text-xl">
            Level up your content with our premium editing packs! Whether you're using Premiere Pro or CapCut, 
            we've got everything you need to create that viral aesthetic. Our packs include custom transitions, 
            effects presets, LUTs, sound effects, and project templates that I personally use in my edits. 
            Transform your videos from basic to professional with just a few clicks!
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-8 justify-center items-center py-8">
          <a href="https://x.com/ElevateEditing" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-xl hover:text-primary transition-colors">
            <FaTwitter size={30} />
            <span>Twitter</span>
          </a>
          <a href="https://discord.gg/MUJWZfskGR" target="_blank" rel="noopener noreferrer"
             className="flex items-center gap-2 text-xl hover:text-primary transition-colors">
            <FaDiscord size={30} />
            <span>Discord</span>
          </a>
        </div>

        {/* Shop Button */}
        <div className="flex justify-center">
          <a href="https://elevateediting.shop" target="_blank" rel="noopener noreferrer"
             className="bg-primary text-white px-8 py-4 rounded-lg text-xl font-bold hover:bg-primary/80 transition-colors">
            Visit Shop
          </a>
        </div>
      </div>
    </main>
  );
} 