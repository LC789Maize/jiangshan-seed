import type { ComponentType, SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const SproutIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21v-8" />
    <path d="M12 13c0-3.3-2.7-6-6-6 0 3.3 2.7 6 6 6Z" />
    <path d="M12 15c0-4 3.1-7.2 7-7.2 0 4-3.1 7.2-7 7.2Z" />
    <path d="M7 21h10" />
  </svg>
);

export const ShieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 3l7 3v6c0 4.2-2.9 7.9-7 9-4.1-1.1-7-4.8-7-9V6l7-3Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const LabIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M9 3h6" />
    <path d="M10 3v6l-5 8.2A2 2 0 0 0 6.7 21h10.6a2 2 0 0 0 1.7-3.8L14 9V3" />
    <path d="M7.5 15h9" />
  </svg>
);

export const FieldIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M3 20h18" />
    <path d="M5 20V9l7-5 7 5v11" />
    <path d="M9 20v-6h6v6" />
  </svg>
);

export const PhoneIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M5 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L15 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 3 5.2 2 2 0 0 1 5 3Z" />
  </svg>
);

export const PinIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Z" />
    <circle cx="12" cy="10" r="2.6" />
  </svg>
);

export const MailIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.5 7 8.5 6 8.5-6" />
  </svg>
);

export const ClockIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3.2 2" />
  </svg>
);

export const CheckIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="m4 12.5 5 5L20 6.5" />
  </svg>
);

export const ArrowIcon = (p: IconProps) => (
  <svg {...base} {...p}>
    <path d="M4 12h15" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

export const stats: { value: string; label: string; icon: ComponentType<IconProps> }[] = [
  { value: "26", label: "审定品种", icon: SproutIcon },
  { value: "1800", label: "累计推广面积（万亩）", icon: FieldIcon },
  { value: "30万+", label: "服务种植户", icon: ShieldIcon },
  { value: "6", label: "科研育种基地", icon: LabIcon },
];
