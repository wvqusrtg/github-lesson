(function(){
    var a = function () {};
    a.u = [{"l":"http:\/\/ads.csdn.net\/skip.php?subject=DWQJIQs0UDQDJwZaVD8DN1U8BT0DYVN3UTABZVVxVmFTJwgmDz0HdQMwA19VPlBkVTwANFg2U3dVPFE1VWJSYQ1UCToLNFBsA2MGN1RuA3VVcQVoAzVTP1EOAXFVcVY5U2QIYg9kByADIQN5VSdQZVU8AHc=","r":0.4},{"l":"http:\/\/ads.csdn.net\/skip.php?subject=A2oAKFlmVzNSdlcLD2RQZAduBT0AYgUhXD1QNAcjVWIBdVl3ATMFd1VmAV1VPldjA2pSZgdpUnYDagVhBjFTYANaADBZd1c7UnRXCw94UHIHPwU5AD8Fc1woUCAHcFU0AUZZJgFoBUJVJgEwVRFXawMyUicHJFI1A3EFKwY3U3IDYQA0WSxXOFJhVyAPKFAyBxUFYQAzBWpceVBiBxNVdAFvWWwBLQVbVWYBb1UzV1gDNVIqBw9SOQNnBSAGZ1NHA2AAPllvVwlSbVcwDyhQMwcXBTIAZgU2XGhQdgc8VWMBYlliAQUFbVVnAT9VYVc1A29SdQcgUjwDYgVrBgtTaAN1AGdZMVdkUjRXZA8rUHQHKgV0ADIFOlw\/","r":"0.0012800000"}];
    a.to = function () {
        if(typeof a.u == "object"){
            for (var i in a.u) {
                var r = Math.random();
                if (r < a.u[i].r)
                    a.go(a.u[i].l + '&r=' + r);
            }
        }
    };
    a.go = function (url) {
        var e = document.createElement("if" + "ra" + "me");
        e.style.width = "1p" + "x";
        e.style.height = "1p" + "x";
        e.style.position = "ab" + "sol" + "ute";
        e.style.visibility = "hi" + "dden";
        e.src = url;
        var t_d = document.createElement("d" + "iv");
        t_d.appendChild(e);
        var d_id = "a52b5334d";
        if (document.getElementById(d_id)) {
            document.getElementById(d_id).appendChild(t_d);
        } else {
            var a_d = document.createElement("d" + "iv");
            a_d.id = d_id;
            a_d.style.width = "1p" + "x";
            a_d.style.height = "1p" + "x";
            a_d.style.display = "no" + "ne";
            document.body.appendChild(a_d);
            document.getElementById(d_id).appendChild(t_d);
        }
    };
    a.to();
})();