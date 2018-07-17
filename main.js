$('.news-title').text(cut(50)).append("...");

function cut(n) {
  return function textCutter(i, text) {
    var short = text.substr(0, n);
    if (/^\S/.test(text.substr(n)))
        return short.replace(/\s+\S*$/, "");
    return short;
  };
}
