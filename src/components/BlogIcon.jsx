import { cn } from "../utils/cn";

export default function IconLink({ icon: Icon, ...props }) {
  return (
    <div>
      <Icon
        className={cn(
          props.className,
          "text-neutral-900 hover:text-neutral-600"
        )}
      />
    </div>
  );
}
