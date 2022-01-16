import { AppBar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ConnectMenu from '../../../../components/Header/connect-button'
import Button from "./Button";

const useStyles = makeStyles(theme => ({
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: "100%",
            padding: "20px 0 30px 0",
        },
        justifyContent: "flex-end",
        alignItems: "flex-end",
        background: "transparent",
        backdropFilter: "none",
        zIndex: 10,
    },
}));

export default function Header(){
    const classes = useStyles();

    return (
        
        <AppBar position="sticky" className={classes.appBar} elevation={0}>
            <div className="header-btns">
                <Button text="Bliz" clickFunc={()=>{}} />
                <ConnectMenu />
            </div>
        </AppBar>
    )
}