
import React , {useContext, useEffect ,useState} from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {DrContext } from "../../../context/CarContext";
import Dr from "../../../assets/images/dr.jpg";



const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6, 0, 6),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      display:' flex',
      flexDirection: ' column',
  alignItems: 'center',
  justifyContent:' center',
  margin: '0 0 0 125px',
		},
    [theme.breakpoints.down('xs')]: {
      display:' flex',
      flexDirection: ' column',
  alignItems: 'center',
  justifyContent:' center',
  margin: '0 0 0 312px',
    },
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
   
  },
  cardMedia: {
    paddingTop: '56.25%', 
    margin: '-172px 0 0 0',
  },
  cardContent: {
    flexGrow: 2,
  },
  aboutDr:{
display:'flex',
flexDirection:'row',
justifyContent:'center',
fontSize:'33px',
margin:'0 0 28px 0',
  }


}));



export default function DoctorInfo() {
  const classes = useStyles();
  const [data, seData] = useContext(DrContext);

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main  className={classes.mainn}>
      
        
        <Container className={classes.cardGrid} maxWidth="md">
        <div className={classes.aboutDr}>About Doctor's</div>
          <Grid container spacing={4}>
            {data.map((d) => (
              <Grid item  xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <img
                    className={classes.cardMedia}
                    src={Dr}
                    />
                   
                  
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {d.name}
                    </Typography>
                    <Typography>
                      {d.specialty}
                    </Typography>
                  </CardContent>
                  <CardActions>
                   {d.info}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}