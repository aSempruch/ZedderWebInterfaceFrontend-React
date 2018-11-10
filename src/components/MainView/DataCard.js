import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        minWidth: 275,
        maxWidth: 800,
        margin: 'auto',
        marginTop: 20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 30,
        padding: '10px 0 5px 20px'
    },
    pos: {
        marginBottom: 12,
    },
};

class DataCard extends Component {

    render() {
        const {classes, content, title} = this.props;

        return (
            <Card className={classes.card}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {title}
                </Typography>
                <div>
                    {content}
                </div>
            </Card>
        );
    }
}

export default withStyles(styles)(DataCard);