import React, { useContext, useEffect } from 'react'

import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';



import {countryData, getOverall} from '../../API'
import { GlobalContext } from '../../context/GlobalState';


const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: '35px auto',
        width: '100%',
        height: '71px',
        display: 'flex',
        justifyContent: 'center',
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
        color: 'white',
    },
}));

const CountrySearch = ({cList}) => {
    const classes = useStyles();
    const [country, setCountry] = React.useState('');
    
    const {setCases} = useContext(GlobalContext)

    const handleChange = (event) => {
        setCountry(event.target.value);
    };

    useEffect(() => {
        async function cData() {
            let c = await countryData(country)
            
            if (country === "Global") {
                c = await getOverall()
            }

            if (country) {
                console.log(c)
                const c_obj = {
                    confirmed: c.confirmed.value,
                    deaths: c.deaths.value,
                    recovered: c.recovered.value
                }
        
                setCases(c_obj)
            }
        }
        cData()
        // console.log(c)
    }, [country])

    return (
        <div className="countryContainer">
        <FormControl sm={5} className={classes.formControl}>
        <InputLabel shrink id="countries">
            Countries
            </InputLabel>
            <Select
                value={country}
                onChange={handleChange}
                labelId="countries"
                className={classes.selectEmpty}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                
                <MenuItem value="Global">
                    Global
                </MenuItem>
                {cList.map((c,i) => (
                    <MenuItem value={c.name} key={i}>
                        {c.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </div>
    )
}


export default CountrySearch