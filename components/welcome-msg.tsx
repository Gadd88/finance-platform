"use client";

import { useUser } from "@clerk/nextjs";

export const WelcomeMsg = () => {
  const { user, isLoaded } = useUser();

  return (
    <div className="space-y-2 mb-4">
      <h2 className="text-2xl lg:text-4xl text-white font-medium">
        {isLoaded ? `Welcome Back, ${user?.firstName} 👋🏻` : "Welcome Back"}
      </h2>
      <p className="text-sm lg:text-base text-[#d4e4ffc2]">
        This is your Financial Overview Report
      </p>
    </div>
  );
};
