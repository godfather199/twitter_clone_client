


function AuthenticationBtn({text, onclick, classname}) {
  return (
    <div className="">
        <button className={`${classname}`} onClick={onclick}>{text}</button>
    </div>
  )
}

export default AuthenticationBtn