import Button from "./Button";

export default function QuickActions({ actions = [] }) {
  return (
    <div className="flex gap-3 flex-wrap mt-6">
      {actions.map((a, i) => (
        <Button
          key={i}
          text={a.text}
          onClick={a.onClick}
          className="w-auto px-3 h-8 rounded-md text-[13px]"
        />
      ))}
    </div>
  );
}
