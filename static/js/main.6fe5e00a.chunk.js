(this.webpackJsonpcurrency=this.webpackJsonpcurrency||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(1),o=n.n(a),c=n(4),r=n.n(c),s=(n(13),n(14),n(5)),i=n(6),l=n(2),h=n(8),v=n(7),j=(n(15),n(0)),u=function(t){Object(h.a)(n,t);var e=Object(v.a)(n);function n(t){var a;return Object(s.a)(this,n),(a=e.call(this,t)).onChange=function(t){var e=t.target.value;a.setState((function(t){return{moedaA_valor:e}}))},a.state={moedaA_valor:"",moedaB_valor:0,valorx:"USD",valory:"BRL"},a.Convert=a.Convert.bind(Object(l.a)(a)),a}return Object(i.a)(n,[{key:"Convert",value:function(){var t=this;console.log(this.state);var e="".concat(this.state.valorx,"_").concat(this.state.valory),n="https://free.currconv.com/api/v7/convert?q=".concat(e,"&compact=y&apiKey=88b08b70098a7f505e95");fetch(n).then((function(t){return t.json()})).then((function(n){var a=n[e].val,o=parseFloat(t.state.moedaA_valor*a).toFixed(2);t.setState({moedaB_valor:o})}))}},{key:"render",value:function(){var t=this;return Object(j.jsx)("div",{className:"conv",children:Object(j.jsxs)("div",{className:"xugo",children:[Object(j.jsx)("h2",{children:this.state.moedaB_valor}),Object(j.jsxs)("h2",{children:[this.state.valorx," \u27a1\ufe0f ",this.state.valory]}),Object(j.jsxs)("select",{type:"select",value:this.state.valorx,onChange:function(e){return t.setState({valorx:e.target.value})},children:[Object(j.jsx)("option",{children:"USD"}),Object(j.jsx)("option",{children:"AOA"}),Object(j.jsx)("option",{children:"BRL"}),Object(j.jsx)("option",{children:"EUR"})]}),Object(j.jsx)("input",{type:"text",onChange:this.onChange,value:this.state.moedaA_valor,onKeyUp:this.Convert}),Object(j.jsxs)("select",{type:"select",value:this.state.valory,onChange:function(e){return t.setState({valory:e.target.value})},children:[Object(j.jsx)("option",{children:"USD"}),Object(j.jsx)("option",{children:"AOA"}),Object(j.jsx)("option",{children:"BRL"}),Object(j.jsx)("option",{children:"EUR"})]})]})})}}]),n}(a.Component);var d=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(u,{})})},b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,a=e.getFID,o=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),o(t),c(t),r(t)}))};r.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(d,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.6fe5e00a.chunk.js.map