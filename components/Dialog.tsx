"use client";
import * as DialogPrimitive from "@radix-ui/react-dialog";

type DialogProps = {
  trigger: React.ReactNode;
  children: React.ReactNode;
};

export default function Dialog({ trigger, children }: DialogProps) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 bg-black/40" />
        <DialogPrimitive.Content className="fixed bg-white p-6 rounded-lg shadow-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {children}

          <DialogPrimitive.Close className="mt-4 bg-gray-200 px-4 py-2 rounded">
            Cerrar
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
