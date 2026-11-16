interface Props {
  className?: string;
}

export default function CaIndiaLogo({ className = 'w-11 h-11' }: Props) {
  return (
    <div
      className={`${className} rounded-xl bg-white overflow-hidden shrink-0 select-none flex items-center justify-center border border-slate-200`}
    >
      <img
        src="/original ca.png"
        alt="CA India Official Emblem"
        className="w-full h-full object-contain p-0.5"
        onError={(e) => {
          if (!e.currentTarget.src.includes('/photos/')) {
            e.currentTarget.src = '/photos/original ca.png';
          }
        }}
      />
    </div>
  );
}
