"use client";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon } from "lucide-react";
import { useCreateTaskModal } from "../hooks/use-create-task-modal";

export const TaskViewSwitcher = () => {
  const { open } = useCreateTaskModal();

  return (
    <Tabs className="flex-1 w-full border rounded-lg">
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row items-center justify-between">
          <TabsList className="w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="Table">
              Table
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="Kanban">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="Calendar">
              Calendar
            </TabsTrigger>
          </TabsList>
          <Button onClick={open} className="w-full lg:w-auto" size={"sm"}>
            <PlusIcon className="size-4 mr-2" />
            New
          </Button>
          <DottedSeparator className="my-4" />
          Data Filters
          <DottedSeparator className="my-4" />
          <div>
            <TabsContent value="Table" className="mt-1">
              Data table
            </TabsContent>
            <TabsContent value="Kanban" className="mt-0">
              Data kanban
            </TabsContent>
            <TabsContent value="Calender" className="mt-0">
              Data calender
            </TabsContent>
          </div>
        </div>
      </div>
    </Tabs>
  );
};
