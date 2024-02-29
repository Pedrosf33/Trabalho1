function changeImage(){
    const html = document.documentElement;
    html.classList.toggle("light")

    var imagem = document.querySelector('#profile');
    var btn = document.getElementById("btnStyle");
    var dt = document.getElementById("data");

    var registro = new Date();
    dt = formatarData(registro);
    
    if(html.classList.contains("light")){
      imagem.setAttribute("src","./images/images.jpg")
      }
      else{
        imagem.setAttribute("src", """")


      }
}