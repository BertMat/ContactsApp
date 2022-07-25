import "./styles.css";
import { ContactsTable } from "./views/ContactsTable";
import Divider from '@mui/material/Divider'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import { SnackbarProvider, useSnackbar } from 'notistack'

export default function App() {

  return (
    
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card variant="outlined">
        <CardHeader
            title='ContactsApp'
            subheader='Contact list'
            titleTypographyProps={{ variant: 'h6' }}
          />
          <Divider></Divider>
        <CardContent>
          
        <SnackbarProvider maxSnack={3}>
        <ContactsTable />
        </SnackbarProvider>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
  );
}
