(this.webpackJsonpdinearound=this.webpackJsonpdinearound||[]).push([[0],{10:function(e,t,n){e.exports=n(32)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){},28:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(8),i=n.n(r),o=(n(15),n(1)),c=n(2),l=n(5),u=n(4),h=n(3),d=(n(16),n(17),n(18),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"Business"},s.a.createElement("div",{className:"image-container"},s.a.createElement("a",{href:this.props.business.url,target:"_blank",rel:"noopener noreferrer"},s.a.createElement("img",{src:this.props.business.imageSrc,alt:this.props.business.name}))),s.a.createElement("h2",null,this.props.business.name),s.a.createElement("div",{className:"Business-information"},s.a.createElement("div",{className:"Business-address"},s.a.createElement("p",null,this.props.business.address),s.a.createElement("p",null,this.props.business.city),s.a.createElement("p",null,this.props.business.state," ",this.props.business.zipCode)),s.a.createElement("div",{className:"Business-reviews"},s.a.createElement("h3",null,this.props.business.category),s.a.createElement("h3",{className:"rating"},this.props.business.rating),s.a.createElement("p",null,this.props.business.reviewCount))))}}]),n}(s.a.Component)),m=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return s.a.createElement("div",{className:"BusinessList"},this.props.businesses.map((function(e){return console.log(e),s.a.createElement(d,{key:e.id,business:e})})))}}]),n}(s.a.Component),p=(n(19),n(9)),g=n.n(p),v=(n(28),function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).handleChange=function(e){a.setState({address:e})},a.handleSelect=function(e){a.props.locationSuggestion(e),document.getElementsByClassName("location-search-input")[0].value=e,a.handleChange(e)},a.handleEnter=function(e){a.props.handleSearch(e)},a.state={address:""},a}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return s.a.createElement(g.a,{value:this.state.address,onChange:this.handleChange,onSelect:this.handleSelect},(function(t){var n=t.getInputProps,a=t.suggestions,r=t.getSuggestionItemProps,i=t.loading;return s.a.createElement("div",null,s.a.createElement("input",n({placeholder:"Where are you located?",className:"location-search-input",onKeyDown:e.handleEnter})),s.a.createElement("div",{className:"autocomplete-dropdown-container"},i&&s.a.createElement("div",null,"Loading..."),a.map((function(e){var t=e.active?"suggestion-item--active":"suggestion-item";return s.a.createElement("div",r(e,{className:t}),s.a.createElement("span",{className:"autocomplete-suggetions"},e.description))}))))}))}}]),n}(s.a.Component)),b=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={term:"",location:"",sortBy:"best_match"},a.handleLocationChange=a.handleLocationChange.bind(Object(l.a)(a)),a.handleTermChange=a.handleTermChange.bind(Object(l.a)(a)),a.handleSearch=a.handleSearch.bind(Object(l.a)(a)),a.handleKeyPress=a.handleKeyPress.bind(Object(l.a)(a)),a.sortByOptions={"Best Match":"best-match","Highest Rated":"rating","Most Reviewed":"review_count"},a}return Object(c.a)(n,[{key:"getSortByClass",value:function(e){return this.state.sortBy===e?"active":""}},{key:"handleSortByChange",value:function(e){this.setState({sortBy:e})}},{key:"handleTermChange",value:function(e){this.setState({term:e.target.value})}},{key:"handleLocationChange",value:function(e){this.setState({location:e.target.value})}},{key:"handleLocationSuggestion",value:function(e){this.setState({location:e})}},{key:"handleKeyPress",value:function(e){try{"Enter"===e.key&&this.state.location&&this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy)}catch(e){console.log(e)}}},{key:"handleSearch",value:function(e){(this.state.term||this.state.location)&&(this.props.searchYelp(this.state.term,this.state.location,this.state.sortBy),e.preventDefault())}},{key:"renderSortByOptions",value:function(){var e=this;return Object.keys(this.sortByOptions).map((function(t){var n=e.sortByOptions[t];return s.a.createElement("li",{onClick:e.handleSortByChange.bind(e,n),className:e.getSortByClass(n),key:n},t)}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"SearchBar"},s.a.createElement("span",null,s.a.createElement("h1",null,"Dine Around"),s.a.createElement("div",{className:"SearchBar-sort-options"},s.a.createElement("ul",null,this.renderSortByOptions())),s.a.createElement("div",{className:"SearchBar-fields"},s.a.createElement("input",{onKeyPress:this.handleKeyPress,onChange:this.handleTermChange,placeholder:"What are you hungry for?"}),s.a.createElement(v,{locationSuggestion:this.handleLocationSuggestion.bind(this),handleSearch:this.handleKeyPress.bind(this)})),s.a.createElement("div",{className:"SearchBar-submit"},s.a.createElement("button",{onClick:this.handleSearch},"Let's Go"))))}}]),n}(s.a.Component),y={search:function(e,t,n){return fetch("https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=".concat(e,"&location=").concat(t,"&sort_by=").concat(n),{headers:{Authorization:"Bearer ".concat("Bh9j1Y4_3RDTt1T8LpggBwyz96IZOkzUiUa6xNRn2HFBFuAjo18AAgRQ5HxGeTQVguKBJW39Kea1mGmmNx86swvxBCDStqibynra1wzfEzeBs-8PnRWbnvPlAOIfXnYx")}}).then((function(e){return e.json()})).then((function(e){if(e.businesses)return e.businesses.map((function(e){return{id:e.id,url:e.url,coordinates:e.coordinates,imageSrc:e.image_url,name:e.name,address:e.location.address1,city:e.location.city,state:e.location.state,zipCode:e.location.zip_code,category:e.categories[0].title,rating:e.rating,reviewCount:e.review_count}}))}))}};n(29).config();var f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={businesses:[]},a.searchYelp=a.searchYelp.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"searchYelp",value:function(e,t,n){var a=this;y.search(e,t,n).then((function(e){a.setState({businesses:e})}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(b,{searchYelp:this.searchYelp}),s.a.createElement(m,{businesses:this.state.businesses}))}}]),n}(s.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[10,1,2]]]);
//# sourceMappingURL=main.321de5bb.chunk.js.map