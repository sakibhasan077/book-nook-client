import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center h-20">
      <Button size="sm" className={"bg-(--color-primary) text-white"} disabled>
        <Spinner data-icon="inline-start" />
        Loading...
      </Button>
    </div>
  );
};

export default loading;
