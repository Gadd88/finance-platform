"use client";

import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

export default function Home() {
  const { onOpen } = useNewAccount();

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={onOpen}>New Account</Button>
    </div>
  );
}
