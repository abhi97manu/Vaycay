import React from "react";
import { useAdminContext } from "../../context/AdminContext";
interface Modal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const Modal = ({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) => {
  const { modal } = useAdminContext();

  return (
    modal.isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4">
        <div className="max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl">
          <div className="flex items-center justify-between border-b p-5">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            </div>

            <button type="button" aria-label="Close dialog" onClick={modal.closeModal} className="rounded-lg px-3 py-2 text-2xl leading-none text-slate-400 hover:bg-slate-100 hover:text-slate-700">×</button>
          </div>

          <div className="p-6">{children}</div>
        </div>
      </div>
    )
  );
};

export default Modal;
