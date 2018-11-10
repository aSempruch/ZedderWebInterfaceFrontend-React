import React, {Component} from 'react';
import DatesField from './DatesField';
import { AppBar, Toolbar, Typography, InputBase, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import DownloadIcon from '@material-ui/icons/CloudDownload';
import { fade } from '@material-ui/core/styles/colorManipulator';

const styles = theme => ({
    root: {
        width: '100%',
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing.unit * 2,
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing.unit * 3,
            width: 'auto',
        },
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    downloadIcon: {
        paddingRight: '10px'
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: 200,
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
});

class TopBar extends Component {
    render() {
        const { classes } = this.props;
        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Zedder.net
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        {SearchField(classes, this.props.initSearch)}
                    </div>
                    <DatesField date={this.props.date} setDate={this.props.setDate}/>
                    <div className={classes.grow}/>
                    {DownloadButton(classes)}
                </Toolbar>
            </AppBar>
        );
    }
}

var DownloadButton = (classes) => (
    <Button variant="extendedFab" color="secondary" className={classes.button} href="https://chrome.google.com/webstore/detail/zedder/oclfiknhggkgkhibknacdlniepkggbal" target="_blank">
        <DownloadIcon className={classes.downloadIcon}/>
        Zedder
    </Button>
);

var SearchField = (classes, initSearch) => (
    <InputBase
        placeholder="Search NetID…"
        classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
        }}
        onKeyDown={(e) => {(e.keyCode === 13 && e.target.value.length > 0) ? initSearch(e.target.value) : initSearch(false)}
        }
    />
);

export default withStyles(styles)(TopBar);