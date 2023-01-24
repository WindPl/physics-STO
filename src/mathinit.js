import { parse, HtmlGenerator } from "latex.js";


var d = document.getElementsByClassName("mathblock");

for(let i = 0; i < d.length; i++) {
    let gen = new HtmlGenerator({hyphenate: false});
    let doc = parse(d.item(i).innerText, {generator: gen});
    d.item(i).innerHTML = "";
    d.item(i).appendChild(doc.domFragment().querySelector(".katex"));
    // let iframe = document.createElement("iframe");
    // d.item(i).appendChild(iframe);
    // iframe.contentWindow.document.open();
    // iframe.contentWindow.document.write(doc.domFragment());
    // iframe.contentWindow.document.close();
    // console.log(doc.SVG().node.outerHTML);
}