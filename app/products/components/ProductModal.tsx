"use client";

import Dialog from "@/components/Dialog";

type ProductModalProps = {
  title: string;
  description: string;
};

export default function ProductModal({
  title,
  description,
}: ProductModalProps) {
  return (
    <Dialog
      trigger={
        <button className="px-4 py-2 bg-blue-600 text-white rounded">
          Ver Detalles
        </button>
      }
    >
      <h2>{title}</h2>
      <p>{description}</p>
    </Dialog>
  );
}
