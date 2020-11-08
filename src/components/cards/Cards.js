import React, {useContext, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


import {GlobalContext} from "../../context/GlobalState"



import {getOverall} from '../../API'

const useStyles = makeStyles({
  root: {
    width: '340px',
    height: '140px',
    margin: '20px auto',
    marginBottom: '30px'
  },
  title: {
    fontSize: 14,
    color: "#000000",
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "24px",
  },
  confirmed: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "36px",
    linehHeight: "44px",
    letterSpacing: "0.05em",

    color: "#F8C45A",
  },
  recovered: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "36px",
    linehHeight: "44px",
    letterSpacing: "0.05em",

    color: "#2CABEB",
  },
  deaths: {
    fontFamily: "Montserrat",
    fontStyle: "normal",
    fontWeight: 800,
    fontSize: "36px",
    linehHeight: "44px",
    letterSpacing: "0.05em",

    color: "#D53976",
  }

});


const Cards = () => {
    const classes = useStyles();

    const {cases} = useContext(GlobalContext)

    const {setCases} = useContext(GlobalContext)

    useEffect(() => {
      async function cases () {
        const d = await getOverall()
        const d_obj = {
          confirmed: d.confirmed.value,
          deaths: d.deaths.value,
          recovered: d.recovered.value
        }
        
        setCases(d_obj)
      }
      cases()
    }, [])

    return (
        <>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    CONFIRMED
                </Typography>
                <Typography variant="h5" component="h2" className={classes.confirmed}>
                    {cases.confirmed}
                </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    DEATHS
                </Typography>
                <Typography variant="h5" component="h2" className={classes.deaths}>
                {cases.deaths}
                </Typography>
                </CardContent>
            </Card>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    RECOVERED
                </Typography>
                <Typography variant="h5" component="h2" className={classes.recovered}>
                {cases.recovered}
                </Typography>
                </CardContent>
            </Card>
        </>
    );
}


export default Cards