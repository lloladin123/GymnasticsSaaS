import React from "react";

interface ITrustedIcon {
  icon: string;
  name: string;
}

const TrustedIcons: ITrustedIcon[] = [
  { icon: "🤸", name: "Gravity Gold" },
  { icon: "🏆", name: "FlexForce" },
  { icon: "🔥", name: "Apex Gymnastics" },
  { icon: "⚡", name: "CoreMomentum" },
  { icon: "🎯", name: "SkyTuck" },
  { icon: "🎖️", name: "PivotPoint" },
  { icon: "🌀", name: "FlightForm" },
  { icon: "🚀", name: "BalanceBase" },
  { icon: "🌟", name: "Springline" },
  { icon: "💪", name: "Vaulted" },
  { icon: "🪂", name: "AirArc" },
  { icon: "🎪", name: "TumbleCore" },
  { icon: "💥", name: "Elevate Athletics" },
];

const Trusted = () => {
  return (
    <section className="my-10 md:my-20 grid md:gap-y-4 place-items-center">
      <span className="text-center font-black">
        Trusted by top brands and organizations worldwide
      </span>
      <div className="flex flex-row justify-center items-center flex-wrap gap-4">
        {TrustedIcons.map((label, index) => (
          <div
            key={index}
            className="flex flex-row space-x-2 justify-center items-center"
          >
            <span className="text-4xl leading-none">{label.icon}</span>
            <span className="text-xl">{label.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Trusted;
