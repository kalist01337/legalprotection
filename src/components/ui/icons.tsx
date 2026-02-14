import type { ReactNode } from "react";

type IconProps = {
  className?: string;
};

function IconBase({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

export function ScaleIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3v18" />
      <path d="M4 7h16" />
      <path d="M6 7 3.5 12h5L6 7Z" />
      <path d="M18 7 15.5 12h5L18 7Z" />
      <path d="M8 21h8" />
    </IconBase>
  );
}

export function BriefcaseIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="7" width="18" height="13" rx="2.5" />
      <path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7" />
      <path d="M3 13h18" />
    </IconBase>
  );
}

export function ShieldIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 3 5 6v6c0 4.5 2.9 7.9 7 9 4.1-1.1 7-4.5 7-9V6l-7-3Z" />
      <path d="m9.2 12.2 1.8 1.8 3.8-3.8" />
    </IconBase>
  );
}

export function CircleQuestionIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 4.2 1.8c-.6.6-1.2 1-1.7 1.6v1.1" />
      <circle cx="12" cy="17.2" r=".6" fill="currentColor" stroke="none" />
    </IconBase>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M6.5 4.5c.5-.5 1.4-.5 1.9 0l2.1 2.1c.5.5.5 1.4 0 1.9l-1 1a13 13 0 0 0 5 5l1-1c.5-.5 1.4-.5 1.9 0l2.1 2.1c.5.5.5 1.4 0 1.9l-1.2 1.2c-.8.8-2 1.1-3.1.8-7.2-2-11.9-6.7-13.9-13.9-.3-1.1 0-2.3.8-3.1l1.2-1.2Z" />
    </IconBase>
  );
}

export function MessageIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M4.5 5.5h15a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3v-3H4.5A1.5 1.5 0 0 1 3 15V7a1.5 1.5 0 0 1 1.5-1.5Z" />
    </IconBase>
  );
}

export function PenSquareIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="m8 16 2.8-.6L18 8.2l-2.2-2.2-7.2 7.2L8 16Z" />
    </IconBase>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.2 2.2 4.8-4.8" />
    </IconBase>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 7 8 6 8-6" />
    </IconBase>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M12 21c3.8-4.2 6-7.4 6-10a6 6 0 1 0-12 0c0 2.6 2.2 5.8 6 10Z" />
      <circle cx="12" cy="11" r="2.2" />
    </IconBase>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <path d="M21 4 3.5 10.8l5.8 2.2L18 6.8 11.2 14" />
      <path d="m9.3 13 1.2 6.5 3.1-3" />
    </IconBase>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <IconBase className={className}>
      <rect x="4" y="4" width="16" height="16" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </IconBase>
  );
}
