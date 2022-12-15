(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{568:function(t,e,a){t.exports=a.p+"assets/img/send-interchain-tx.daa4caaf.png"},624:function(t,e,a){"use strict";a.r(e);var n=a(0),o=Object(n.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"transactions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#transactions"}},[t._v("#")]),t._v(" Transactions")]),t._v(" "),n("p",{attrs:{synopsis:""}},[t._v("Learn about Interchain Accounts transaction execution")]),t._v(" "),n("h2",{attrs:{id:"executing-a-transaction"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#executing-a-transaction"}},[t._v("#")]),t._v(" Executing a transaction")]),t._v(" "),n("p",[t._v("As described in "),n("RouterLink",{attrs:{to:"/apps/interchain-accounts/auth-modules.html#trysendtx"}},[t._v("Authentication Modules")]),t._v(" transactions are executed using the interchain accounts controller API and require a "),n("code",[t._v("Base Application")]),t._v(" as outlined in "),n("a",{attrs:{href:"https://github.com/cosmos/ibc/tree/master/spec/app/ics-030-middleware",target:"_blank",rel:"noopener noreferrer"}},[t._v("ICS30 IBC Middleware"),n("OutboundLink")],1),t._v(" to facilitate authentication. The method of authentication remains unspecified to provide flexibility for the authentication module developer.")],1),t._v(" "),n("p",[t._v("Transactions are executed via the ICS27 "),n("RouterLink",{attrs:{to:"/apps/interchain-accounts/auth-modules.html#trysendtx"}},[n("code",[t._v("SendTx")]),t._v(" API")]),t._v(". This must be invoked through an Interchain Accounts authentication module and follows the outlined path of execution below. Packet relaying semantics provided by the IBC core transport, authentication, and ordering (IBC/TAO) layer are omitted for brevity.")],1),t._v(" "),n("p",[n("img",{attrs:{src:a(568),alt:"send-tx-flow",title:"Transaction Execution"}})]),t._v(" "),n("h2",{attrs:{id:"atomicity"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#atomicity"}},[t._v("#")]),t._v(" Atomicity")]),t._v(" "),n("p",[t._v("As the Interchain Accounts module supports the execution of multiple transactions using the Cosmos SDK "),n("code",[t._v("Msg")]),t._v(" interface, it provides the same atomicity guarantees as Cosmos SDK-based applications, leveraging the "),n("a",{attrs:{href:"https://docs.cosmos.network/main/core/store.html#cachemultistore",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("CacheMultiStore")]),n("OutboundLink")],1),t._v(" architecture provided by the "),n("a",{attrs:{href:"https://docs.cosmos.network/main/core/context.html",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("Context")]),n("OutboundLink")],1),t._v(" type.")]),t._v(" "),n("p",[t._v("This provides atomic execution of transactions when using Interchain Accounts, where state changes are only committed if all "),n("code",[t._v("Msg")]),t._v("s succeed.")])])}),[],!1,null,null,null);e.default=o.exports}}]);