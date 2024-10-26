import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusIcon } from "lucide-react";

export const TaskViewSwitcher = () => {
  return (
    <Tabs className="flex-1 w-full border rounded-lg">
      <div className="h-full flex flex-col overflow-auto p-4">
        <div className="flex flex-col gap-y-2 lg:flex-row justify-between items-center">
          <TabsList className="h-8 w-full lg:w-auto">
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Table
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Kanban
            </TabsTrigger>
            <TabsTrigger className="h-8 w-full lg:w-auto" value="table">
              Calendar
            </TabsTrigger>
          </TabsList>
          <Button className="w-full lg:w-auto">
            <PlusIcon className="size-4 mr-2" />
            New
          </Button>
          <DottedSeparator className="my-4" />
          {/* Add filters */}
          Data Filters
          <DottedSeparator className="my-4" />
          <>
            <TabsContent value="table" className="mt-0">
              Data table
            </TabsContent>
            <TabsContent value="table" className="mt-0">
              Data kanban
            </TabsContent>
            <TabsContent value="table" className="mt-0">
              Data calender
            </TabsContent>
          </>
        </div>
      </div>
    </Tabs>
  );
};
