// biome-ignore lint/style/useFilenamingConvention: Component filenames are PascalCase
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SelectCategory = ({
  placeholder,
  items,
  value,
  onValueChange,
}: {
  placeholder: string;
  items: string[];
  value?: string;
  onValueChange?: (value: string) => void;
}) => (
  <Select onValueChange={onValueChange} value={value}>
    <SelectTrigger className="w-full cursor-pointer rounded-none border-black bg-white px-5 font-mozilla text-base uppercase">
      <SelectValue placeholder={placeholder} />
    </SelectTrigger>
    <SelectContent className="">
      <SelectGroup>
        {items.map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </SelectGroup>
    </SelectContent>
  </Select>
);

export default SelectCategory;
