import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { AppBar, Snackbar, Typography, Box, CssBaseline, Grid, Container, Button, TextField, FormControl, Radio, RadioGroup, FormControlLabel } from "@material-ui/core";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter";
import php from "react-syntax-highlighter/dist/esm/languages/prism/php";
import materialDark from "react-syntax-highlighter/dist/esm/styles/prism/material-dark";
import useHashParam from "use-hash-param";
import getLabels, { getFormattedLabels, getGender, getWords } from "./api/LabelsAPI";
import PostTypeLabels from "./Labels/PostTypeLabels";
import TaxonomyLabels from "./Labels/TaxonomyLabels";

const primaryColor = "#1c8bbf";

const theme = createTheme({
  background: "#1a1a1a",
  palette: {
    type: "dark",
    primary: {
      main: primaryColor,
    },
  },
});

SyntaxHighlighter.registerLanguage("php", php);

export default function App() {
  const [name, setName] = useHashParam("name", "");
  const [type, setType] = useHashParam("type", "");
  const [gender, setGender] = useState("");
  const [domain, setDomain] = useHashParam("domain", "");
  const [copied, setCopied] = useState(false);
  const [domainValid, setdomainValid] = useState(true);

  if (!type) {
    setType("post-type");
  }

  const labelsType = type === "taxonomy" ? TaxonomyLabels : PostTypeLabels;

  const labels = name && domainValid ? getLabels(labelsType, name, gender, domain) : [];

  const code = getFormattedLabels(labels);

  const dark = {
    ...materialDark,
    'code[class*="language-"]': {
      ...materialDark['code[class*="language-"]'],
      background: "#232323",
    },
    'pre[class*="language-"]': {
      ...materialDark['pre[class*="language-"]'],
      background: "#232323",
    },
    operator: {
      color: primaryColor,
    },
    punctuation: {
      color: primaryColor,
    },
  };

  const handleSnackClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setCopied(false);
  };

  const onNameChange = (e) => {
    const name = e.target.value;
    const words = getWords(name);
    const gender = getGender(words.first);
    setName(e.target.value);
    setGender(gender ?? "");
  };

  const onDomainChange = (e) => {
    setDomain(e.target.value);
    setdomainValid(e.target.checkValidity());
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <React.Fragment>
        <AppBar position="static">
          <Box pt={1}>
            <Typography align="center" variant="h5" component="h1" gutterBottom>
              Générateur de labels WordPress
              <Typography align="center" component="div">
                pour (type de publication | taxonomie) personnalisé•e
              </Typography>
            </Typography>
          </Box>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} lg={4}>
              <FormControl component="fieldset" margin="normal">
                <RadioGroup aria-label="type" name="type" value={type} onChange={(e) => setType(e.target.value)} row>
                  <FormControlLabel value="post-type" control={<Radio color="primary" />} label="Type de publication" />
                  <FormControlLabel value="taxonomy" control={<Radio color="primary" />} label="Taxonomie" />
                </RadioGroup>
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <TextField
                  onChange={onNameChange}
                  label={type === "post-type" ? "Nom du type de publication" : "Nom de la taxonomie"}
                  value={name}
                  variant="outlined"
                  placeholder="Article"
                  helperText="Renseigner un nom au singulier et en minuscule"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  autoFocus
                />
              </FormControl>

              <FormControl fullWidth variant="outlined" margin="normal">
                <TextField
                  onChange={onDomainChange}
                  label="Domaine"
                  value={domain}
                  variant="outlined"
                  placeholder="domaine"
                  helperText={domainValid ? "Renseigner un domaine ([a-z-]+)" : "Domaine invalide"}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{ pattern: "[a-z-]+" }}
                  error={!domainValid}
                />
              </FormControl>

              <FormControl component="fieldset">
                <RadioGroup row aria-label="type" name="type" value={gender} onChange={(e) => setGender(e.target.value)}>
                  <FormControlLabel value="f" control={<Radio color="primary" />} label="Féminin" />
                  <FormControlLabel value="m" control={<Radio color="primary" />} label="Masculin" />
                </RadioGroup>
              </FormControl>

              <CopyToClipboard text={code} onCopy={() => name && setCopied(true)}>
                <FormControl fullWidth variant="outlined" margin="normal">
                  <Button variant="contained" color="primary" size="large" fullWidth disabled={!name}>
                    Copier
                  </Button>
                </FormControl>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Box pt={3}>
                <SyntaxHighlighter language="php" style={dark}>
                  {code}
                </SyntaxHighlighter>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Snackbar severity="success" open={copied} autoHideDuration={3000} message="Copié !" onClose={handleSnackClose} anchorOrigin={{ vertical: "bottom", horizontal: "left" }} />
      </React.Fragment>
    </ThemeProvider>
  );
}
