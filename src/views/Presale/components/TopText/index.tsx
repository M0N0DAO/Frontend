import React, { useState } from 'react';
import "./top-text.scss";
import { Grid, InputAdornment, OutlinedInput, Zoom, Container } from "@material-ui/core";
import Button from '../Header/Button';
import { useDispatch, useSelector } from 'react-redux';
import { approveMimAmount,claimAmount } from 'src/store/slices/account-slice';
import { useWeb3Context } from 'src/hooks';

interface TopTextProps {

}

const TopText = ({ }: TopTextProps) => {
    const [quantity, setQuantity] = useState(0)

    const { provider, chainID, } = useWeb3Context();


    const state = useSelector((state:any)=> state)

    const dispatch = useDispatch()

    const setMax = () => {
        setQuantity(parseFloat(state?.account?.balance?.mim))
    }

    const approveHandler = ()=>{
        dispatch(approveMimAmount({networkID:chainID,provider,amount:quantity}))
        setQuantity(0);
    }

    const approveClaim = ()=>{
        dispatch(claimAmount({networkID:43113,provider,}))
    }


    return (
        <>
            <div className="content_container">
                <div className="content">
                    <h1 className="content_heading">Presale</h1>
                    <p className="content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </div>
            <div className="content_container">
                <div className="content">
                    <h2>Presale</h2>
                    <p className="content_text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <div className="stake-card-action-row">
                        <OutlinedInput
                            type="number"
                            placeholder="Amount"
                            className="stake-card-action-input"
                            value={quantity}
                            onChange={(e: any) => setQuantity(e.target.value)}
                            labelWidth={0}
                            endAdornment={
                                <InputAdornment position="end">
                                    <div onClick={setMax} className="stake-card-action-input-btn">
                                        <p>Max</p>
                                    </div>
                                </InputAdornment>
                            }
                        />

                        <div className="stake-card-tab-panel">
                            <div
                                className="stake-card-tab-panel-btn"
                                onClick={approveHandler}
                            >
                                <p>Approve</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="content_container">
                <div className="content">
                    <h2>Presale Claim</h2>
                        <div className="claim-text">
                                <Button text="Claim" clickFunc={approveClaim} />
                            <div>
                                <p>This is a test text</p>
                            </div>
                        </div>
                    </div>
            </div>



        </>
    );
}

export default TopText;