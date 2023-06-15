import { Metadata } from "next";
import { History } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Icons } from "./icons";
import { TiptapEditor } from "./ui/tiptap-editor";

export const metadata: Metadata = {
  title: "Playground",
  description: "The OpenAI Playground built using the components.",
};

export default function PlaygroundPage() {
  return (
    <>
      <div className=" h-full w-full flex-col md:flex">
        <div className="container flex flex-col items-start justify-between space-y-2 py-4 sm:flex-row sm:items-center sm:space-y-0 md:h-16">
          <h2 className="text-lg font-semibold">Playground</h2>
        </div>
        {/* <Separator /> */}
        <div className="flex h-full flex-col space-y-4">
          <TiptapEditor
            placeholder="Write a tagline for an ice cream shop"
            className="min-h-[400px] flex-1 p-4 md:min-h-[700px] lg:min-h-[700px]"
          />
          {/* <div className="flex items-center space-x-2">
            <Button>Submit</Button>
            <Button variant="secondary">
              <span className="sr-only">Show history</span>
              <History className="h-4 w-4" />
            </Button>
          </div> */}
        </div>
      </div>
    </>
  );
}
