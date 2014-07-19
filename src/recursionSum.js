// recursionSum.js
// splashinn

function head(list) {
return list[0];
}

function tail(list) {
return list.slice(1);
}

module.exports = function sum(list) {
if (!list.length) return 0;
return head(list) + sum(tail(list));
};
