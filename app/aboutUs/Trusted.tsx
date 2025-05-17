import { Icon, UserCheck } from "lucide-react";
import React, { JSX } from "react";

interface ITrustedIcon {
  icon: JSX.Element;
  name: string;
}

const TrustedIcons: ITrustedIcon[] = [
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
  { icon: <UserCheck className="w-15 h-15"></UserCheck>, name: "BrandName" },
];

const Trusted = () => {
  return (
    <section className="mt-20 grid gap-y-4 place-items-center">
      <span className="font-black">
        Trusted by top brands and organizations worldwide
      </span>
      <div className="flex flex-row justify-center items-center flex-wrap">
        {TrustedIcons.map((label, index) => (
          <div className="flex flex-row space-x-2 justify-center items-center">
            {label.icon}
            <span className="text-xl">{label.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
