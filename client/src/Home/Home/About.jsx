
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email } from '@material-ui/icons';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'http://www.pixelstalk.net/wp-content/uploads/2016/08/Background-Beautiful-Nature-Full-HD.jpg'})`,
        width: '100%',
        height: '70vh',
        backgroundPosition: 'left 0px bottom 0px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})

const About = () => {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.banner}></Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Blog Application</Typography>
                <Typography variant="h5" className={classes.text}>I'm a Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati sint consequuntur veniam inventore odit ipsum molestiae nesciunt quisquam officia tempora odio eius, sit numquam, esse iure recusandae architecto soluta. Voluptas?<br />
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur repudiandae, minus explicabo ducimus hic autem officia, possimus alias quibusdam beatae maxime atque at tempore. Debitis blanditiis asperiores hic ratione facilis.
                    {/* <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://github.com/kunaltyagi9" color="inherit" target="_blank"><GitHub /></Link>
                    </Box> */}
                </Typography>
                {/* <Typography variant="h5" className={classes.text}>
                    Need something built or simply want to have chat? Reach out to me on
                    <Box component="span" style={{ marginLeft: 5 }}>
                        <Link href="https://www.instagram.com/codeforinterview/" color="inherit" target="_blank">
                            <Instagram />
                        </Link>
                    </Box>  
                        or send me an Email 
                        <Link href="mailto:codeforinterview@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                            <Email />
                        </Link>.
                </Typography> */}
            </Box>
        </Box>
    )
}

export default About;