import { cn } from "../utils/cn";

export default function BlogIcon({ icon: Icon, ...props }) {
  return (
    <div>
      <Icon
        className={cn(
          props.className,
          "text-neutral-900 hover:text-neutral-600 size-6"
        )}
      />
    </div>
  );
}
