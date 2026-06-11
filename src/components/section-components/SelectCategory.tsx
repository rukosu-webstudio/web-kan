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
}) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full rounded-none border-black px-5 font-mozilla uppercase text-base bg-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup>
          {items.map((item, index) => {
            return (
              <SelectItem key={index} value={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectCategory;
