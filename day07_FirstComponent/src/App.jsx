function Profile({imgName}){
  let path = `src\assets\${imgName}\.png`
  return(
    <img 
    src = {path}
    alt="Img" />
  );
}

function Gallery(){
  return(
    <>
      <h1>Amazing </h1>
      <Profile imgName="img1"/>
      <Profile imgName="img2"/>
      <Profile imgName="img3"/>
    </>
  )
}

export default function App() {
  return <Gallery />
}

