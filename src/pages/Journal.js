

const Journal = ()=>{
  return(
      <div className='journalHolder'>
          <h1>Welcome to your journal</h1>

          <div className='journal'>
          <form>
            <div><input className='journalInput'  type="date" data-date-inline-picker="true" /></div>
            <div><textarea placeholder='Insert Text Here' rows = "15" cols = "60" name = "description"/></div>
            <div><button type='submit'>Post</button></div>
          </form>
          </div>

      </div>
  )
}

export default Journal