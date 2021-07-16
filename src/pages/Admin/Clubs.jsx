import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ClubService from "services/ClubService";

import { makeStyles } from "@material-ui/core/styles";

import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Card,
    Typography,
} from "@material-ui/core";

import {
    AddOutlined as AddIcon,
    VisibilityOutlined as ViewIcon,
    EditOutlined as EditIcon,
    DeleteForeverOutlined as DeleteIcon,
} from "@material-ui/icons";

import Page from "components/Page";
import ClubFormModal from "components/modals/ClubFormModal";
import ClubDeleteModal from "components/modals/ClubDeleteModal";
import {
    PrimaryActionButton,
    SecondaryActionButton,
    EditButton,
    DeleteButton,
} from "components/buttons";

// styles {{{
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    cell: {
        fontSize: "1.4em",
    },
});
// }}}

const Clubs = () => {
    const classes = useStyles();
    const history = useHistory();

    const [clubs, setClubs] = useState({ loading: true });

    // create/edit club form modal
    const [formProps, setFormProps] = useState({});
    const [formModal, setFormModal] = useState(null);

    // delete confirmation modal
    const [deleteProps, setDeleteProps] = useState({});
    const [deleteModal, setDeleteModal] = useState(null);

    // fetch list of clubs from API
    useEffect(() => {
        (async () => setClubs(await ClubService.getClubs()))();
    }, []);

    return (
        <Page
            header={
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    Manage Clubs
                    <SecondaryActionButton
                        noPadding
                        variant="outlined"
                        color="primary"
                        size="large"
                        onClick={() => {
                            setFormProps({});
                            setFormModal(true);
                        }}
                    >
                        <AddIcon fontSize="small" />
                        New Club
                    </SecondaryActionButton>
                </Box>
            }
            loading={clubs?.loading}
            empty={!clubs?.data?.length}
        >
            <ClubFormModal controller={[formModal, setFormModal]} {...formProps} />
            <ClubDeleteModal controller={[deleteModal, setDeleteModal]} {...deleteProps} />

            <TableContainer component={(props) => <Card {...props} variant="outlined" />}>
                <Table stickyHeader className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {clubs?.data?.map((club) => (
                            <TableRow key={club.id}>
                                <TableCell component="th" scope="row" className={classes.cell}>
                                    {club.name}
                                </TableCell>
                                <TableCell align="left" className={classes.cell}>
                                    <Typography color="textSecondary">{club.mail}</Typography>
                                </TableCell>
                                <TableCell align="right" className={classes.cell}>
                                    <PrimaryActionButton
                                        noPadding
                                        onClick={() => {
                                            history.push(`/clubs/${club.id}`);
                                        }}
                                    >
                                        <ViewIcon />
                                    </PrimaryActionButton>
                                    <EditButton
                                        noPadding
                                        onClick={() => {
                                            setFormProps({ club });
                                            setFormModal(true);
                                        }}
                                    >
                                        <EditIcon />
                                    </EditButton>
                                    <DeleteButton
                                        noPadding
                                        onClick={() => {
                                            setDeleteProps({ club });
                                            setDeleteModal(true);
                                        }}
                                    >
                                        <DeleteIcon />
                                    </DeleteButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Page>
    );
};

export default Clubs;
