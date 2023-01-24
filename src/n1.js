import {Application, Graphics, Mesh} from "pixijs";

let app = new Application({width: 800, height: 800, antialias: true});

let canvas = document.getElementById("animation-1").appendChild(app.view);

let sunA = app.stage.addChild(new Graphics().beginFill(0xffaaaa).drawCircle(0,0,75).endFill());
sunA.position.set(app.screen.width / 2 + 150, app.screen.height / 2);

let sunB = app.stage.addChild(new Graphics().beginFill(0xaaffaa).drawCircle(0,0,75).endFill());
sunB.position.set(app.screen.width / 2 - 150, app.screen.height / 2);

let elapsed = 0;
let x = 0;

canvas.onclick = _ => {
    x++;
    if(x!==1)
        elapsed = 0;
    else
        app.ticker.add((delta) => {
            function easeTime(x) {
                let e = x/300;
                let ans;
                if(e<1) {
                    ans = -(Math.cos(Math.PI * e) - 1) / 2;
                } else {
                    ans = 1;
                }
                return ans*6*Math.PI;
            }
            elapsed += delta;
            let time = easeTime(elapsed);
            sunA.x = app.screen.width / 2  + 150*Math.cos(time);
            sunA.y = app.screen.height / 2 + 150*Math.sin(time);

            sunB.x = app.screen.width / 2  - 150*Math.cos(time);
            sunB.y = app.screen.height / 2 - 150*Math.sin(time);
        });
};