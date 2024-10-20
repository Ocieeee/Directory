import { useMedia } from "react-use";

import { Dialog, DialogContent } from "@/components/ui/dialog";

import { Drawer, DrawerContent } from "@/components/ui/drawer";
import React from "react";

interface ResponsiveModalProps {
  children: React.ReactNode;
  open: boolean;
  onOpenchange: (open: boolean) => void;
}

export const ResponsiveModal = ({
  children,
  open,
  onOpenchange,
}: ResponsiveModalProps) => {
  const isDesktop = useMedia("(min-width: 1024px)", true);

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenchange}>
        <DialogContent className="w-full sm:max-w-lg p-0 border-none overflow-y-auto hide-scrollbar max-h-[85vh]:">
          {children}
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenchange}>
      <DrawerContent>
        <div className="overflow-y-auto hide-scrollbar max-h-[85vh]:">
          {children}
        </div>
      </DrawerContent>
    </Drawer>
  );
};
