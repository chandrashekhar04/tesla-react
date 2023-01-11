import React from 'react'

function Section(props) {
  return (
    <>
      <section style={{backgroundImage: `url('teslaImages/${props.backgroundImage}')`}}>
        <div className='first'>
          <h1>{props.carname}</h1>
					<p>{props.cardescription}</p>
        </div>

        <div className='second'>
          <button><a>{props.leftbtn}</a></button>
          {props.rightbtn && <button><a>{props.rightbtn}</a></button>}
        </div>

        <div className='arrow'>
          {props.arrow && <h1>⇩</h1>}
        </div>
      </section>
    </>
  )
}

export default Section