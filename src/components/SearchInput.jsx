import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cn } from "../utils/cn";
import BlogIcon from "./BlogIcon";

export default function SearchInput({ placeholder, ...props }) {
  return (
    <div className={cn(props.className)}>
      <BlogIcon
        icon={MagnifyingGlassIcon}
        className="size-5 text-neutral-900 hover:text-neutral-600 cursor-pointer"
      />
      <input
        type="search"
        name="q"
        placeholder={placeholder}
        className={cn("w-full bg-transparent px-2", "border-none outline-none")}
      />
    </div>
  );
}
