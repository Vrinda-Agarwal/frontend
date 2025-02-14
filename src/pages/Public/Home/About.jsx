import { useTheme } from "@mui/styles";

import { Card, CardContent, Grid, Box, Typography } from "@mui/material";

const Statistic = ({ number, title }) => {
    const theme = useTheme();

    return (
        <Card
            variant="outlined"
            sx={{
                borderRadius: theme.borderRadius,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.secondary.light,
                borderColor: theme.palette.secondary.dark,
            }}
        >
            <Box p={2}>
                <Typography variant="h4">{number}</Typography>
                <Typography variant="subtitle1">{title}</Typography>
            </Box>
        </Card>
    );
};

const About = () => {
    const theme = useTheme();

    return (
        <Box px={5} py={8} backgroundColor={theme.palette.primary.main}>
            <Box>
                <Typography variant="h4" color="secondary" fontWeight={500} gutterBottom>
                    Clubs @ IIITH
                </Typography>
                <Typography variant="h6" color="secondary" fontWeight={400} mt={1}>
                    TODO : small description about clubs
                </Typography>
                <Grid container spacing={2} mt={1}>
                    <Grid item>
                        <Statistic number="7" title="Technical Clubs" />
                    </Grid>
                    <Grid item>
                        <Statistic number="16" title="Cultural Clubs" />
                    </Grid>
                </Grid>
            </Box>

            <Box mt={8}>
                <Typography variant="h4" color="secondary" fontWeight={500} gutterBottom>
                    Clubs Council @ IIITH
                </Typography>
                <Typography variant="h6" color="secondary" fontWeight={400} mt={1}>
                    The Clubs Council is the largest Student Administrative Organization at IIIT
                    Hyderabad, and acts as an umbrella body of all the institute affiliated and
                    associate student-led Clubs, Groups & Societies.
                </Typography>
                <Grid container spacing={2} mt={1}>
                    <Grid item>
                        <Statistic number="2" title="Secretaries" />
                    </Grid>
                    <Grid item>
                        <Statistic number="5" title="Undersecretaries" />
                    </Grid>
                    <Grid item>
                        <Statistic number="3" title="Tech Team Members" />
                    </Grid>
                    <Grid item>
                        <Statistic number="23+" title="Student-Constituent Groups" />
                    </Grid>
                    <Grid item>
                        <Statistic number="50+" title="Student Coordinators" />
                    </Grid>
                    <Grid item>
                        <Statistic number="250+" title="Organizing Team Members" />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default About;
