import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

interface GenericSelectProps {
    items: string[];
    handleChange: (event: SelectChangeEvent) => void;
    label: string;
    item: string;
}

export default function GenericSelect(props: GenericSelectProps) { 
    return (
      <FormControl variant="standard" sx={{ minWidth: 200, marginLeft: '2rem' }}>
        <InputLabel>{props.label}</InputLabel>
        <Select
          value={props.item}
          label={props.item}
          onChange={props.handleChange}
        >
            { props.items.map(item => (
              <MenuItem key={item} value={item}>{item}</MenuItem>
            )) }
        </Select>
      </FormControl>
    );
};