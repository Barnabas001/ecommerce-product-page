import closeBtn from "../assets/icon-close.svg";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-64 bg-white h-full shadow-2xl flex flex-col p-8 gap-8">
        {/* Close btn */}
        <button
          onClick={onClose}
          //   className="self-start text-gray-500 hover:text-gray-900"
        >
          <img src={closeBtn} alt="Close btn" />
        </button>

        {/* Nav Links */}
        {["Collections", "Men", "Women", "About", "Contact"].map((link) => (
          <a
            key={link}
            href="#"
            onClick={onClose}
            className="text-gray-900 font-bold text-xl hover:text-orange-500 transition-colors"
          >
            {link}
          </a>
        ))}
      </div>
      <div className="flex-1 bg-black/50" onClick={onClose} />
    </div>
  );
}
