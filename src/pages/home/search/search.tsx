import { IconButton, SelectChangeEvent, TextField } from "@mui/material";
import GenericSelect from "../../../components/select/genericSelect";
import SearchIcon from '@mui/icons-material/Search';
import { SearchContainer } from "./styles";
import { ChangeEvent } from "react";

interface SearchProps {
    site?: string;
    category?: string;
    handleChangeSite: (event: SelectChangeEvent) => void;
    handleChangeCategory: (event: SelectChangeEvent) => void;
    handleChangeProduct: (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
    onClick: () => void;
}

export default function Search(props: SearchProps) {
    return (
        <SearchContainer>
            <GenericSelect
                items={["Mercado Livre", "Buscapé"]}
                label="Web"
                item={props.site ?? ''}
                handleChange={props.handleChangeSite}
            />
            <GenericSelect
                items={["Geladeira", "TV", "Celular"]}
                label="Categorias"
                item={props.category ?? ''}
                handleChange={props.handleChangeCategory}
            />
            <TextField
                sx={{ minWidth: 200, marginLeft: '2rem' }}
                label="Produto"
                variant="standard"
                onChange={props.handleChangeProduct}
            />
            <IconButton onClick={props.onClick}>
                <SearchIcon />
            </IconButton>
        </SearchContainer>
      

    );
}