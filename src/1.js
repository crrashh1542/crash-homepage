// This is served for friends/index.html
// You can also take it as a friend list.
import friends from "./js/friends.json"

new Vue({
    "el": "#links",
    "data": {
        "friends": friends
    }
})