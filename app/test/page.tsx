"use client";
import { Button } from "@/components/ui/button";
import styled from "styled-components";

export const RedDiv = styled.div`
  color: blue;
  background-color: red;
  height: 30px;
  width: 30px;
`;

export default function test() {
  return (
    <div>
      <RedDiv>Hello </RedDiv>
      <Button>Hello</Button>
    </div>
  );
}
