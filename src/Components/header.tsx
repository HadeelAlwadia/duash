interface Iprops{
  name:string,
  age:number
}

const Header=({name,age}:Iprops):JSX.Element=>(
<div>hello,{name} i love you</div>
)

export default Header;