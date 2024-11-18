"use client";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

interface BackgroundWrapperProps {
  children: React.ReactNode;
}

export function BackgroundWrapper({ children }: BackgroundWrapperProps) {
  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden   bg-background md:shadow-xl">
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "absolute inset-0 z-0" // Ensure the pattern is behind the content
        )}
      />
      <div className="relative z-10">{children}</div> {/* Ensure content is above the background */}
    </div>
  );
} 