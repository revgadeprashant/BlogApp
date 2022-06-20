

import Banner from "./Home/Banner";
import Categories from "./Home/Categories";
import Posts from "./Home/AllPost/Posts";
import { Grid } from "@material-ui/core";
const Home = () => {
    return (
        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Posts />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;