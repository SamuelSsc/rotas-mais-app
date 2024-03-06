import { VBox } from "@components";
import { LoginForm } from "@components/auth";
import React from "react";

export default function HomeScreen() {
  return (
    <VBox vGrow vAlign="center" hAlign="center">
      <LoginForm />
    </VBox>
  );
}
