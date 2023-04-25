import React, { useState } from 'react'
import "./Barcodegen.css"
import QRCode from "react-qr-code";
// import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ArrozwDownwardIcon from '@mui/icons-material/ArrowDownward';
function Barcodegen() {
 const [isQRcode,setIsQRcode]=useState(false)
const [userData,setUserData]=useState();
const[qrCodeData,setQrCodeData]=useState();
const generateQRcode=(e)=>{
    e.preventDefault();
    setQrCodeData(userData);
    setIsQRcode(true);
    setUserData();
}


  return (
    <div className='barcodegen'>
        <div className='create-suggestion'>
            <h2>Create Your Barcode below</h2>
            {/* <FileDownloadIcon style={{ height: '38px', width: '38px' }}/> */}
           < ArrozwDownwardIcon style={{ height: '38px', width: '38px' }}/>
        </div>
        <div className='form-sec'>
            <form >
                
                <div>
                    <textarea className='teaxtArea' placeholder='Enter Your Details Here'
                    onChange={(e)=> setUserData( e.target.value)}
                    ></textarea>
                </div>

                <div>
                    <button type='submit' id='generate_btn' onClick={generateQRcode}>Generate QR</button>
                </div>
            </form>
        </div>
        {
            isQRcode && <div className='Qr'>
                <QRCode value={qrCodeData} 
                id="123456"
                />
            </div>
        }
    </div>
  )
}

export default Barcodegen;