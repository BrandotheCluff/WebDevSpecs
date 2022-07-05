import React, {useState, useEffect} from 'react'



const MaxCalc = () => {
    const [squat, setSquat] = useState()
    const [maxSquat, setMaxSquat] = useState(0)
    const [bench, setBench] = useState()
    const [maxBench, setMaxBench] = useState(0)
    const [dead, setDead] = useState()
    const [maxDead, setMaxDead] = useState(0)



    // useEffect(() => {
    //     setMaxLift(maxLift => Math.round((lift * (1 + (5 / 30) + (1 + (3 / 30)))) / 2))
    // }, 0)
   
    const calcMaxes = (e) => {
        maxSquat = Math.round((+squat.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
        maxBench = Math.round((+bench.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
        maxDead = Math.round((+dead.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
    }



  return (
    <div className="Calculator">
        <h4 className='max-title'>Max Calculator</h4>


<div>
    <h6 className='lift-name'>Squat</h6>
    <input type="number" className="squat-input" onChange={calcMaxes} value={squat}/>
    x 5 ➡️
    <input className="squat-answer" readOnly={true} value={maxSquat}/>
    <h6 className='lift-name'>Bench</h6>
    <input type="number" className="bench-input" onChange={calcMaxes} value={bench}/>
    x 5 ➡️
    <input className="bench-answer" readOnly={true} value={maxBench}/>
    <h6 className='lift-name'>Dead</h6>
    <input type="number" className="dead-input" onChange={calcMaxes} value={dead}/>
    x 5 ➡️
    <input className="dead-answer" readOnly={true} value={maxDead} />
    <br></br>
    <br></br>
    <div class="button-field">
        <div className="button-flex">
            <div className="buttons">
                <button className="get-maxes" onClick={(e) => {calcMaxes(e)}}>MAX OUT!</button>
                <button className="reset">Clear</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default MaxCalc