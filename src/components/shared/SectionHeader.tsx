"use client";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  centered?: boolean;
  dark?: boolean;
  theme?: "light" | "dark";
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  description, 
  className = "", 
  centered = true, 
  dark = false,
  theme
}: SectionHeaderProps) => {
  const finalSubtitle = subtitle || description;
  const isDark = dark || theme === "light"; // In RentalSolution, theme="light" means it's on a light background, so text should be dark.
  
  return (
    <div className={`${centered ? "text-center" : "text-start"} mb-12 ${className}`}>
      <h2 className={`text-lg md:text-2xl font-bold mb-4 ${isDark ? "text-secondary" : "text-white"}`}>
        {title}
      </h2>
      {finalSubtitle && (
        <p className={`${isDark ? "text-gray-500" : "text-gray-400"} text-sm md:text-base max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {finalSubtitle}
        </p>
      )}
    </div>
  );
};
