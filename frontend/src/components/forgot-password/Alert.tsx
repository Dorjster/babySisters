import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const AlertModal = () => {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
};
