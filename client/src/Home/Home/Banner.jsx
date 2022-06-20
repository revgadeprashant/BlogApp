import { makeStyles, Box, Typography } from '@material-ui/core';

const useStyle = makeStyles({
    image: {
        width: '100%',
        background: `url(${'https://lh6.googleusercontent.com/proxy/tyAjXerswhUGCpTiKiP81l4TNRtt02uf9BSiJEs816rBbeVumOY9Xss_0m0yTcb_BpmVP3Kc9CJxaNpRyfBGaiUQtgta8nklGEJrGIQVTEJOoP7FFw=w1360-h600-p-k-no-nu'})`,
        // https://thetyee.ca/Culture/2017/10/31/FawnLawn.jpg'}) center/45% repeat-x #000,
        height: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        '& :first-child': {
            fontSize: 70,
            color: '#FFFFFF',
            lineHeight: 1,
            borderRadius:10,
        },
        '& :last-child': {
            fontSize: 40,
            color: '#FFFFFF',
            letterSpacing:2,
            borderRadius:10,
            padding:'0 15px '
        }
    }   
})


const Banner=()=>{const classes = useStyle();
    const url = 'https://thetyee.ca/Culture/2017/10/31/FawnLawn.jpg';
    return (
        <>
            <Box className={classes.image}>
                <Typography><i>The</i></Typography>
                <Typography>Global WildLife</Typography>
            </Box>
        </>
    )
}

export default Banner;