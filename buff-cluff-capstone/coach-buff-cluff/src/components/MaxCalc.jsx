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
        switch(e.target.name) {
            case 'squat':
                setMaxSquat(Math.round((e.target.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2))
                break
            case 'bench':
                setMaxBench(Math.round((e.target.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2))
                break
            case 'dead':
                setMaxDead(Math.round((e.target.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2))
                break
        }
        // maxSquat = Math.round((e.target.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
        // maxBench = Math.round((e.bench.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
        // maxDead = Math.round((e.dead.value * (1 + (5 / 30) + (1 + (3 / 30)))) / 2)
    }
    // const handleCalc = () => {
    //     calcMaxes()
    // }

    const clearVals = () => {
        setSquat()
        setBench()
        setDead()
        setMaxSquat(0)
        setMaxBench(0)
        setMaxDead(0)
    }

  return (
    <div className="Calculator">
        <header className='max-title'>Max Calculator</header>


<div className='Calc-contents'>
    <header className='lift-name'>Squat</header>
    <input type="number" className="input" onChange={calcMaxes} value={squat} name='squat'/>
    x 5 ➡️
    <input className="input" readOnly={true} value={maxSquat}/>
    <header className='lift-name'>Bench</header>
    <input type="number" className="input" onChange={calcMaxes} value={bench} name='bench'/>
    x 5 ➡️
    <input className="input" readOnly={true} value={maxBench}/>
    <header className='lift-name'>Dead</header>
    <input type="number" className="input" onChange={calcMaxes} value={dead} name='dead'/>
    x 5 ➡️
    <input className="input" readOnly={true} value={maxDead} />
    <br></br>
    <br></br>
    <div class="button-field">
        <div className="button-flex">
            <div className="buttons">
                <button className="reset" onClick={clearVals}>Clear</button>
            </div>
        </div>
    </div>
</div>
    </div>
  )
}

export default MaxCalc