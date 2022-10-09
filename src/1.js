// import style
import "./styles/friends.less"
// import friend list
import frList from "./js/friends.json"

new Vue({
    el: "#links",
    data: {
        friends: frList
    }
})