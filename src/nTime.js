import {Application, Graphics} from "pixijs";

let app = new Application({width:800, height: 800});

let canvas = document.getElementById("animation-time").appendChild(app.view);

let ruler = new Graphics();

ruler.beginTextureFill()

// app.stage.addChild()