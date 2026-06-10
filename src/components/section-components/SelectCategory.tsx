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
  defaultValue = "Todo",
}: {
  placeholder: string;
  items: string[];
  defaultValue?: string;
}) => {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-full rounded-none border-black px-5 font-mozilla uppercase text-base">
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
