import { Avatar, Box, Button, Grid, List, ListItem, ListItemAvatar, ListItemText, Paper, Stack, TextField, Typography } from '@mui/material';
import { Observer } from 'mobx-react-lite';
import { ReactElement, useState } from 'react';
import { appContainer, SEARCH_PAGE } from '../../Composition/AppContainer';
import { withInstances } from '../../utils/withInstances';
import { SearchType } from '../../Composition/ViewModels/SearchViewModel';
import ImageIcon from '@mui/icons-material/Image';
import { ListItem as ListItemType } from '../../services/FormatList'

// class to style button component
const ButtonStyle = {
  backgroundColor: '#3f51b5',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#3f51b5',
    color: '#fff',
  },
};

interface SearchResultsPageProps {
  viewModel: SearchType | undefined;
}

function SearchResultsPage({ viewModel }: SearchResultsPageProps): ReactElement {
  const [value, setValue] = useState<string>(viewModel?.searchValue || '');
  const [results, setResults] = useState<Array<any>>([]);

  const updateTextValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSearch = async () => {
    if (viewModel) {
      await viewModel.search(value)
      setResults(viewModel.searchResults);
    }
  };

  const handleSelectResult = (result: any) => {
    viewModel?.selectResult(result);
  };

  const renderListItem = (result: any) => (
    <ListItem key={result.id} button onClick={() => handleSelectResult(result)}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={result.title}
        secondary={result.description}
      />
    </ListItem>
  );

  return (
    <Observer>
      {() => (
        <Box>
          <Grid container spacing={2}>
            <Grid item md={4}>
              <Stack direction="row">
                <TextField
                  id="outlined-basic"
                  label="Search for an article"
                  variant="outlined"
                  value={value}
                  onChange={updateTextValue}
                />
                <Button
                  style={ButtonStyle}
                  sx={{ marginLeft: 2 }}
                  variant="contained"
                  onClick={onSearch}
                >
                  Search
                </Button>
              </Stack>
              <Box marginTop={2}>
                {viewModel?.selectedResult && (
                  <Paper sx={{ padding: 2 }}>
                    <strong>{viewModel.selectedResult.title}</strong>
                    <p>{viewModel.selectedResult.description}</p>
                    <p style={{ float: 'right' }}>{viewModel.selectedResult.price}</p>
                    <div style={{ clear: 'both' }}></div>
                  </Paper>
                )}
              </Box>
            </Grid>
            <Grid item md={8}>
              <Box alignItems="center" flexGrow={1}>
                <Typography align="center" variant="h5">
                  Search results
                </Typography>
              </Box>
              {!results.length && <Box>No results</Box>}
              {results.length > 0 && (
                <List>
                  {results.map(renderListItem)}
                </List>
              )}
            </Grid>
          </Grid>
        </Box>
      )}
    </Observer>
  );
}

export default withInstances({ viewModel: SEARCH_PAGE }, SearchResultsPage);