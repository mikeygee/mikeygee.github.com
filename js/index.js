// get latest activity from twitter and github

$(document).ready(function() {
	$.getJSON("http://api.twitter.com/1/statuses/user_timeline.json?callback=?",
		{ screen_name: "geeplusplus", count: 3, include_entities: true, include_rts: true },
		function(data) {
			for(var i = 0, len = data.length; i < len; i++) {
				var date = new Date(data[i].created_at.replace("+0000 ",""));
				data[i].date = date.toDateString().slice(4).replace(/\s/g,"&nbsp;");
				if(data[i].entities.urls.length > 0)
					data[i].url = data[i].entities.urls[0].url;
				else
					data[i].url = "http://twitter.com/" + data[i].user.screen_name;
			}
			$("#tweet-template").tmpl(data).appendTo("#tweets");
		}
	);

	$.getJSON("http://github.com/api/v2/json/repos/show/mikeygee?callback=?",
		function(data) {
			data.repositories.sort(function(a,b) {
				var d1 = new Date(a.pushed_at);
				var d2 = new Date(b.pushed_at);
				return d2 - d1
			});
			
			// get/set latest commit message for each repo
			var len = (data.repositories.length < 3) ? data.repositories.length : 3;
			var count = 0;
			var addMessage = function(index) {
				return function(commitData) {
					data.repositories[index].message = commitData.commits[0].message;
					if(++count == len)
						$("#gh-template").tmpl(data.repositories).appendTo("#gh-activity");
				}
			}
			for(var i = 0; i < len; i++) {
				var repo = data.repositories[i];
				repo.date = (new Date(repo.pushed_at)).toDateString().slice(4).replace(/\s/g,"&nbsp;");
				$.getJSON("http://github.com/api/v2/json/commits/list/mikeygee/" + repo.name + "/master?callback=?", addMessage(i));
			}
		}
	);

});

