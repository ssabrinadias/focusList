import React, { useState } from "react";

import IconButton from "@material-ui/core/IconButton";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

import { useStyles } from "./style";

export interface SearchProps {
  onSearch: (query: string) => void;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const classes = useStyles();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const handleSearch = () => {
    setIsSearching(true);
    onSearch(searchQuery);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
    onSearch("");
    setIsSearching(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.root}>
      <TextField
        fullWidth
        placeholder="Procurando tarefas..."
        value={searchQuery}
        onChange={handleChange}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {!isSearching ? (
                <IconButton type="submit">
                  <SearchIcon />
                </IconButton>
              ) : (
                <IconButton onClick={handleClear}>
                  <ClearIcon />
                </IconButton>
              )}
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Search;
