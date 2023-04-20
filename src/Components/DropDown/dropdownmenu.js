import React, {useState} from 'react'

const DropDownMenu = () => {

    const [selectedOpt, setSelectedOpt] = useState("")
    let sample = [  {country: "United States", code: "USA"},  {country: "Canada", code: "CAN"},  {country: "United Kingdom", code: "GBR"},  {country: "Japan", code: "JPN"},  {country: "Australia", code: "AUS"}]

    const handleOnChange = (e) => {
        setSelectedOpt(e.target.value);
    }

    return (
        <>
            <div style={{backgroundColor:"cyan"}}>
            <select id="contries" value={selectedOpt} onChange={handleOnChange} style={{width:"100px"}}>
                <option value="">----Please choose a country----</option>
                {
                    sample.map((cty)=> {
                       return <option value={cty.code}>{cty.country}</option>
                    })
                }
            </select>

            {selectedOpt && <div>You selected {selectedOpt}</div>}
            </div>
        </>
    )
}

export default DropDownMenu