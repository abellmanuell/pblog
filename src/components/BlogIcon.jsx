import { cn } from "../utils/cn";

export default function BlogIcon({ icon: Icon, ...props }) {
  return (
    <Icon
      className={cn(
        props.className,
        props.size || "size-6",
        props.color || "text-neutral-900 hover:text-neutral-600"
      )}
    />
  );
}
