function MakeIcons ({iconUI}){
    const styleUI = {
      background:"#525252",
      margin:"5px",
    }
  
    let ui = [];
    iconUI.forEach(e=>{
      ui.push(<span style={styleUI}>{e}</span>);
    })
    return (
      <>
         {ui}
      </>
    )
  }

  export default MakeIcons;