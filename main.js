setTimeout("load(500,500)", 10)
function rgbObj() {
    var res = new Object();
    res[0] = 0;
    res[1] = 0;
    res[2] = 0;
    return res;
}
function rgbp(x, y) {
    var res = new rgbObj();
    for(var i=0;i<3;i++) 
        res[i] = (x[i] + y[i]) / 2;
    return res;
}
    var bs = "";
function load(n, m, Srgb = new rgbObj()) {
    var clr = new Object();
    for(var i=0;i<=n;i++) {
        clr[i] = new Object();
        for(var j=0;j<=m;j++) {
            clr[i][j] = new rgbObj();
            clr[i][j][0] =0;
            clr[i][j][1] = 0;
            clr[i][j][2] = 0;
        }
    }
    var cnt = 0;
    clr[0][1][0] = Math.random()*256;
    clr[0][1][1] = Math.random()*256;
    clr[0][1][2] = Math.random()*256;
    var cdy = 1;
    for(var i=1;i<=n;i++) {
        if(cdy) {
            var randN = Math.floor(Math.random()*3)
            clr[i][1][0] = clr[i-1][1][0];
            clr[i][1][1] = clr[i-1][1][1];
            clr[i][1][2] = clr[i-1][1][2];
            clr[i][1][randN] += Math.random()*2;
            if(clr[i][1][randN]>=256) {
                cnt++;
                clr[i][1][randN] = 255;
                cdy=0;
            }
        } else {
            var randN = Math.floor(Math.random()*3)
            clr[i][1][0] = clr[i-1][1][0];
            clr[i][1][1] = clr[i-1][1][1];
            clr[i][1][2] = clr[i-1][1][2];
            clr[i][1][randN] = clr[i][1][randN] - Math.random()*2;
            if(clr[i][1][randN]<0) {
                //cnt++;
                clr[i][1][randN] = 0;
                cdy=1;
            }
        }
        var cdy2=1;
        for(var j=2;j<=m;j++) {
            if(cdy2) {
                var randN = Math.floor(Math.random()*3)
                clr[i][j][0] = clr[i][j-1][0];
                clr[i][j][1] = clr[i][j-1][1];
                clr[i][j][2] = clr[i][j-1][2];
                clr[i][j][randN] = clr[i][j][randN] + Math.random()*2;
                if(clr[i][j][randN]>=256) {
                    cnt++;
                    clr[i][j][randN] = 255;
                    cdy2=0;
                }
            } else {
                var randN = Math.floor(Math.random()*3)
                clr[i][j][0] = clr[i][j-1][0];
                clr[i][j] = clr[i][j-1];
                clr[i][j] = clr[i][j-1];
                clr[i][j][randN] = clr[i][j][randN] - Math.random()*2;
                if(clr[i][j][randN]<0) {
                    //cnt++;
                    clr[i][j][randN] = 0;
                    cdy2=1;
                }
            }
        }
    }
    console.log(cnt)
    for(var i=1;i<=n;i++) {
        if (typeof(bs) == "undefined") { 
            bs = ""
        }  
        bs += "<div style='margin-top: 0px;margin-left: 0px;height:1px'>"
        for(var j=1;j<=m;j++) {
            bs += "<div style='float:left;margin-top:0px;margin-left:0px;width:1px;height:1px;background-color:rgb(" + Math.ceil(clr[i][j][0]) + "," + Math.ceil(clr[i][j][1]) + "," + Math.ceil(clr[i][j][2]) + ")'></div>"
            //console.log(clr[i][j][0]);
            //console.log(i+" "+j+" "+clr[i][j][0])
        }
        bs += "</div>"
    }
    document.querySelector("body").innerHTML = bs
    //console.log(typeof(document.body.innerHTML))
}
