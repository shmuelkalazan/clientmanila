import './header.css'
function Header() {
  return (
    <div className='header'>
        <div className='headerleft'>
            <h3 className='h33'>?מה חדש</h3>
            <h3 className='h33'>תפריט מנות קרב</h3>
            <h3 className='h33'> צור קשר</h3>
        </div>
        <div className='headerright'>
            <h1>מנילה צבאית</h1>
            <img className='idf_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Badge_of_the_Israeli_Defense_Forces_2022_version.svg/648px-Badge_of_the_Israeli_Defense_Forces_2022_version.svg.png" alt="" />
        </div>
    </div>
  )
}

export default Header