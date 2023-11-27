
import './Quote.css';
import speed from '../../images/speed.jpg';
import slow from '../../images/slowClock.jpg';
import reg from '../../images/clock.jpg';
import red from '../../images/red.png';
const Quote = () => {
  return (
    <div className='q-con' style={{
      background:`linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,1)), url(${red})  center/cover no-repeat`}}>
        <div className="card c1">
          <div className="uclr clr1">Express</div>
          <div className="crdpic" style={{
            background:`url(${speed}) center/cover no-repeat`}} />
          <p className='cardtext tt yy'>
          mon-saturday
          <p className='cardtext y tt'>+</p>
          <p className='cardtext y2 tt'>Sunday by appointment</p>
            <ul className='cardtext'>
              <li><p className='cardtext'>24/7</p></li>
            </ul>
          </p>
        </div>

        <div className="card c3">
          <div className="uclr clr3">Standard</div>
          <div className="crdpic" style={{
            background:`url(${reg}) center/cover no-repeat`}} />
          <p className='cardtext yy'>
          <p className='cardtext tt'>mon-friday</p>
            <ul> <li>6am-6pm</li></ul>
            <p className='cardtext tt'>mon-saturday</p>
            <ul> <li>6am-1pm</li></ul>

          </p>
        </div>
        
        <div className="card c2">
          <div className="uclr clr2">Economy</div>
          <div className="crdpic" style={{
            background:`url(${slow}) center/cover no-repeat`}} />
          <p className='cardtext yy'>
          <p className='cardtext tt'>mon-friday</p>
            <ul> <li>6am-6pm</li></ul>
            
          </p>
        </div>

        
        
    </div>
  )
}

export default Quote;